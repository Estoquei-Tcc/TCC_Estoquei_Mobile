import { StyleSheet, Text, View, Pressable, } from 'react-native'
import { router } from 'expo-router'
import { MaterialIcons } from '@react-native-vector-icons/material-icons'
import { Fontes } from '@/constants/Fontes'
import { Cores } from '@/constants/Cores'
import { useAutenticacao } from '@/hooks/useAutenticacao'

interface CabecalhoProps {
    titulo: string | undefined
}

export function Cabecalho({titulo}: CabecalhoProps){

    const {deslogar, deslogarContexto} = useAutenticacao()

    const sair = async () => {
        await deslogar()
        await deslogarContexto()
        router.replace('/')
    }

    return(
        <View style={estilos.conteiner}>
            <Text style={estilos.texto}>{titulo}</Text>

            <Pressable 
                style={estilos.logout}
                onPress={sair}
            >
                <MaterialIcons 
                    name="logout" 
                    size={Fontes.grande1} 
                    color={Cores.corprimariaclara} 
                />
            </Pressable>    
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: Cores.corprimaria,
        alignItems: 'center',
        height: 55,
    },
    texto: {
        color: Cores.cortextoclaro,
        fontSize: Fontes.grande1,
        fontFamily: Fontes.baseBold,
        width: '90%',
        textAlign: 'center',
    },
    textoLogo: {
        color: Cores.corprimariaclara,
        fontSize: Fontes.grande2,
        fontFamily: Fontes.logo,
        width: '90%',
        textAlign: 'center',
        marginTop: -12,
    },
    logout: {
        width: '10%',
        alignItems: 'center',
    }
})