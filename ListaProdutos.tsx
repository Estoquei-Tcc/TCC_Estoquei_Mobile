import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { navigate } from 'expo-router/build/global-state/router'
import { Drawer } from 'expo-router/drawer'
import { Cores } from '@/constants/Cores'

const PRODUTOS = [
    { id: '1', nome: 'Café premium 500g',  codigo: '7891234', categoria: 'Alimentos', estoque: 42, status: 'Normal'   },
    { id: '2', nome: 'Açúcar cristal 1kg', codigo: '7895678', categoria: 'Alimentos', estoque:  8, status: 'Baixo'    },
    { id: '3', nome: 'Detergente 500ml',   codigo: '7899012', categoria: 'Limpeza',   estoque:  0, status: 'Esgotado' },
]

export default function ListaProdutos() {

    const irParaCadastro = () => navigate('/CadastroProdutos')
    const irParaDetalhe  = (id: string) => navigate(`/DetalheProduto/${id}` as any)

    return (
        <SafeAreaView style={estilos.conteiner}>
            <Drawer.Screen options={{ title: 'Lista de Produtos' }} />

            <View style={estilos.topo}>
                <TouchableOpacity onPress={irParaCadastro} style={estilos.botao}>
                    <Text style={estilos.botaoTexto}>+ Adicionar produto</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={PRODUTOS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={estilos.lista}
                ListEmptyComponent={
                    <View style={estilos.vazio}>
                        <Text style={estilos.vazioTexto}>Nenhum produto cadastrado.</Text>
                        <TouchableOpacity onPress={irParaCadastro} style={estilos.botao}>
                            <Text style={estilos.botaoTexto}>Cadastrar primeiro produto</Text>
                        </TouchableOpacity>
                    </View>
                }
                renderItem={({ item }) => {
                    const statusCor =
                        item.status === 'Esgotado' ? '#8b1f1f'
                        : item.status === 'Baixo'  ? '#FF8C00'
                        : '#176243'

                    return (
                        <TouchableOpacity style={estilos.card} onPress={() => irParaDetalhe(item.id)}>
                            <View style={estilos.cardTopo}>
                                <Text style={estilos.cardNome}>{item.nome}</Text>
                                <View style={[estilos.badge, { backgroundColor: statusCor }]}>
                                    <Text style={estilos.badgeTexto}>{item.status}</Text>
                                </View>
                            </View>
                            <Text style={estilos.cardInfo}>Cód: {item.codigo}  ·  {item.categoria}</Text>
                            <Text style={estilos.cardEstoque}>Estoque: {item.estoque} un.</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: Cores.corfundo,
    },
    topo: {
        padding: 16,
    },
    lista: {
        paddingHorizontal: 16,
        paddingBottom: 32,
        gap: 10,
    },
    card: {
        backgroundColor: Cores.corsuperficie,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Cores.corborda,
        padding: 16,
    },
    cardTopo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    cardNome: {
        fontSize: 16,
        fontWeight: '700',
        color: Cores.primariaEscura,
        flex: 1,
        marginRight: 10,
    },
    cardInfo: {
        fontSize: 13,
        color: Cores.cortextosecundario,
        marginBottom: 4,
    },
    cardEstoque: {
        fontSize: 14,
        fontWeight: '600',
        color: Cores.primariaEscura,
    },
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20,
    },
    badgeTexto: {
        fontSize: 12,
        fontWeight: '700',
        color: Cores.corsuperficie,
    },
    botao: {
        backgroundColor: Cores.corprimaria,
        paddingVertical: 14,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoTexto: {
        color: Cores.corsuperficie,
        fontWeight: '900',
        fontSize: 15,
    },
    vazio: {
        alignItems: 'center',
        marginTop: 60,
        gap: 20,
    },
    vazioTexto: {
        fontSize: 16,
        color: Cores.corprimariahover,
    },
})
