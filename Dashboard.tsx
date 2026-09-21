import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { navigate } from 'expo-router/build/global-state/router'
import { useAutenticacao } from '@/hooks/useAutenticacao'
import { Drawer } from 'expo-router/drawer'

export default function Dashboard(){

    const { usuarioContexto } = useAutenticacao()

    const Cadastro= () => {
          navigate('/CadastroProdutos')
      }

    return(
        <SafeAreaView style={estilos.conteiner}>

            <Drawer.Screen options={{ title: 'Dashboard' }} />
            <View style={estilos.card}>


                <View style={estilos.quadrado}>
                <Text style={estilos.tituloCard}>TOTAL DE PRODUTOS</Text>
                <Text style={estilos.valorCard}>100</Text>
                <Text style={estilos.descricaoCard}>PRODUTOS CADASTRADOS</Text>
                </View>

                <View style={estilos.quadrado}>
                <Text style={estilos.tituloCard}>TOTAL DE PRODUTOS</Text>
                <Text style={estilos.valorCard}>100</Text>
                <Text style={estilos.descricaoCard}>PRODUTOS CADASTRADOS</Text>
                </View>

                <View>
                <TouchableOpacity onPress={Cadastro} style={estilos.botao}>
                    <Text style={estilos.botaoVerdadeiro} >Cadastro de Produtos</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#f8f7f4',
    },
    card: {
        flex: 1,
        borderRadius: 15,
        padding: 15,
        margin: 10,
    },
    botao: {
        backgroundColor: '#FF8C00',
        paddingVertical: 14,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    botaoVerdadeiro: {
        color: '#fff',
        fontWeight: '900',
    },
    quadrado: {
        width: 190,
        height: 155,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F2E3D5',
        padding: 16,
        margin: 6,
        justifyContent: 'flex-start',
    },
    tituloCard: {
        fontSize: 15,
        fontWeight: '700',
        color: '#A66A32',
        textTransform: 'uppercase',
        marginBottom: 5,
    },

    valorCard: {
        fontSize: 35,
        fontWeight: '700',
        color: '#171717',
        lineHeight: 28,
    },

    descricaoCard: {
        fontSize: 15,
        color: '#C47A35',
        marginTop: 4,
    },
})
