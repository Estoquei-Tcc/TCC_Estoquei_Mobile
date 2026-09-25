import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { navigate } from 'expo-router/build/global-state/router'
import { useAutenticacao } from '@/hooks/useAutenticacao'
import { Drawer } from 'expo-router/drawer'
import { Cores } from '@/constants/Cores'

export default function Dashboard(){

    const { usuarioContexto } = useAutenticacao()

    const Cadastro = () => {
        navigate('/CadastroProdutos')
    }

    const Relatorio = () => {
        navigate('/Relatorio')
    }

    return(
        <SafeAreaView style={estilos.conteiner}>

            {/* pra colocar o titulo nas paginas tem q usar isso aqui*/}
            <Drawer.Screen options={{ title: 'Dashboard' }} />

            <ScrollView contentContainerStyle={estilos.scroll}>

                <Text style={estilos.titulo}>Dashboard/Início</Text>

                <View style={estilos.linha}>
                    <View style={estilos.quadrado}>
                        <Text style={estilos.tituloCard}>Total de Produtos</Text>
                        <Text style={estilos.valorCard}>8</Text>
                        <Text style={estilos.descricaoCard}>3 categorias</Text>
                    </View>

                    <View style={estilos.quadrado}>
                        <Text style={estilos.tituloCard}>Vendas Hoje</Text>
                        <Text style={estilos.valorCard}>R$ 312,00</Text>
                        <Text style={estilos.descricaoCard}>14 itens vendidos</Text>
                    </View>
                </View>

                <View style={estilos.quadrado}>
                    <Text style={estilos.tituloCard}>Produto em Destaque</Text>
                    <Text style={estilos.valorCard}>Café premium 500g</Text>
                    <Text style={estilos.linkCard}>Ver detalhes</Text>
                </View>

                <View style={[estilos.quadrado, estilos.destaque]}>
                    <Text style={[estilos.tituloCard, estilos.textoClaro]}>Alertas de Estoque</Text>
                    <Text style={[estilos.valorCard, estilos.textoClaro]}>5</Text>
                    <Text style={[estilos.descricaoCard, estilos.textoClaro]}>2 zerados, 3 baixos</Text>
                </View>

                <View style={estilos.quadrado}>
                    <Text style={estilos.tituloCard}>Ações Rápidas</Text>

                    <TouchableOpacity onPress={Cadastro} style={estilos.botaoAcao}>
                        <Text style={estilos.botaoAcaoTexto}>Cadastrar produto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilos.botaoAcao}>
                        <Text style={estilos.botaoAcaoTexto}>Registrar movimentação</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={Relatorio} style={estilos.botaoAcao}>
                        <Text style={estilos.botaoAcaoTexto}>Ver relatórios</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: Cores.corfundo,
    },
    scroll: {
        padding: 18,
        paddingBottom: 40,
    },
    titulo: {
        fontSize: 20,
        fontWeight: '800',
        color: Cores.primariaEscura,
        marginBottom: 16,
    },
    linha: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 12,
    },
    quadrado: {
        flex: 1,
        backgroundColor: Cores.corsuperficie,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Cores.corborda,
        padding: 14,
        marginBottom: 12,
    },
    destaque: {
        backgroundColor: Cores.corprimaria,
        borderColor: Cores.corprimaria,
    },
    tituloCard: {
        fontSize: 12,
        fontWeight: '700',
        color: Cores.cortextosecundario,
        marginBottom: 6,
    },
    valorCard: {
        fontSize: 22,
        fontWeight: '800',
        color: Cores.primariaEscura,
    },
    descricaoCard: {
        fontSize: 12,
        color: Cores.corprimaria,
        marginTop: 4,
        fontWeight: '600',
    },
    linkCard: {
        fontSize: 12,
        color: Cores.corprimaria,
        marginTop: 6,
        fontWeight: '700',
    },
    textoClaro: {
        color: Cores.cortextoclaro,
    },
    botaoAcao: {
        borderWidth: 1,
        borderColor: Cores.corbordadestaque,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 14,
        marginTop: 10,
    },
    botaoAcaoTexto: {
        color: Cores.corprimariahover,
        fontWeight: '700',
        fontSize: 13,
    },
})