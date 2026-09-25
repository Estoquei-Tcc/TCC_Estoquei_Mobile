import { useState } from 'react'
import { router } from 'expo-router'
import { Text, StyleSheet, TextInput, Pressable, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@react-native-vector-icons/material-icons'
import { UsuarioTipo } from '@/types/Usuario'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'
import { useAutenticacao } from '@/hooks/useAutenticacao'

export default function index() {

  const [usuario, setUsuario] = useState<UsuarioTipo>(
    {codigo: '', nome: '', email: '', senha: '', permissao: 'usuario'}
  )

  const {validarUsuario, logarContexto} = useAutenticacao()

  const verificarUsuario = async () => {

        if (!usuario.email || !usuario.senha) {
            Alert.alert(
                "Campos obrigatórios", 
                "Por favor, informe um e-mail e senha."
            )
            return
        }

        // Cria a autenticação do usuário (Authentication)
        let retorno = await validarUsuario(usuario.email, usuario.senha)

        if (retorno == 'sucesso') {

          // Salva usuário logado
          await logarContexto(usuario)

          router.push('/(auth)/Dashboard')

        }else {

            Alert.alert(
                'Falha de autenticação',
                retorno,
                [{ text: 'OK' }],
                { cancelable: false } // Impede fechar tocando fora (Apenas Android)
            )
        }
  }

  const abrirNovoUsuario = () => {
      router.push('/novoUsuario')
  }

  return (
    <SafeAreaView style={estilos.conteiner}>

      <Image 
          style={estilos.logo}
          source={require('@/assets/images/layout/Logo.png')}
      />

      <Text style={estilos.titulo}>Estoquei!</Text>

      <TextInput 
        style={estilos.campo}
        placeholder='E-mail'
        placeholderTextColor={Cores.cortextosecundario}
        value={usuario.email}
        onChangeText={(valor) => setUsuario({...usuario, email: valor})}
      />

      <TextInput 
        style={estilos.campo}
        placeholder='Senha'
        placeholderTextColor={Cores.cortextosecundario}
        value={usuario.senha}
        onChangeText={(valor) => setUsuario({...usuario, senha: valor})}
      />

      <Pressable 
        style={estilos.botao}
        android_ripple={{color: Cores.corprimariahover}}
        onPress={verificarUsuario}
      >
        <Text style={estilos.rotulo}>Entrar</Text>
        <MaterialIcons name="login" size={Fontes.grande1} color={Cores.cortextoclaro} />
      </Pressable>

      <Pressable                
          style={ ({ pressed }) => [
              estilos.botaoNovoUsuario, 
              ({ opacity: pressed ? 0.5 : 1 }) 
          ] }
          onPress={abrirNovoUsuario}
      >
          <MaterialIcons name="person-add" size={Fontes.grande2} color={Cores.cortextoclaro} />
      </Pressable>

    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Cores.corfundo,
    },
    titulo: {
      fontSize: Fontes.extraGrande,
      color: Cores.corprimaria,
    },
    campo: {
      backgroundColor: Cores.corsuperficie,
      color: Cores.primariaEscura,
      fontFamily: Fontes.baseRegular,
      fontSize: Fontes.medio1,
      height: 50,
      width: 300,
      marginVertical: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: Cores.corborda,
    },
    botao: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Cores.corprimaria,
      height: 50,
      width: 300,        
      borderRadius: 8,
      marginVertical: 10,
    },
    rotulo: {
      color: Cores.cortextoclaro,
      fontFamily: Fontes.baseRegular,
      fontSize: Fontes.medio1,
      marginEnd: 10,
    },
    logo: {
      height: 100,
      width: 100 
    },
    botaoNovoUsuario: {
      backgroundColor: Cores.corprimariaclara,
      alignSelf: 'flex-end',
      marginEnd: 65,
      padding: 10,
      marginVertical: 5,
      borderRadius: 8,
    },    
    botaoFundamentos: {
      backgroundColor: Cores.corsuperficieuave,
      padding: 20,
      borderRadius: 100,
    }
})