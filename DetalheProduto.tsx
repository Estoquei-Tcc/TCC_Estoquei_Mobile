import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { navigate } from 'expo-router/build/global-state/router'
import { Drawer } from 'expo-router/drawer'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

const produto = {
    id:         '1',
    nome:       'Café premium 500g',
    codigo:     '7891234',
    categoria:  'Alimentos',
    fornecedor: 'Distribuidora Norte',
    precoCusto:  12.50,
    precoVenda:  22.90,
    estoque:     8,
    qtdMin:      20,
    status:      'Baixo',
}

const historico = [
    { id: '1', tipo: 'Saída',   quantidade: 5,  responsavel: 'Ana Lima',     data: '18/06/2025' },
    { id: '2', tipo: 'Saída',   quantidade: 3,  responsavel: 'Carlos Melo',  data: '15/06/2025' },
    { id: '3', tipo: 'Entrada', quantidade: 20, responsavel: 'João Mercado', data: '12/06/2025' },
]

export default function DetalheProduto() {

    const irParaMovimento = () => navigate('/')
    const excluir = () => Alert.alert('Excluir', 'Deseja excluir este produto?', [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', onPress: () => navigate('/ListaProdutos') },
    ])

    const margem = Math.round(((produto.precoVenda - produto.precoCusto) / produto.precoVenda) * 100)

    return (
        <SafeAreaView style={estilos.conteiner}>
            <Drawer.Screen options={{ title: produto.nome }} />

            <ScrollView contentContainerStyle={estilos.scroll}>

                {/* botões de cima */}
                <View style={estilos.acoes}>
                    <TouchableOpacity style={estilos.btnPerigo} onPress={excluir}>
                        <Text style={estilos.btnPerigoTexto}>Excluir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.btnPrimario} onPress={irParaMovimento}>
                        <Text style={estilos.btnPrimarioTexto}>+ Registrar movimentação</Text>
                    </TouchableOpacity>
                </View>

                {/* parte da informação */}
                <View style={estilos.card}>
                    <Text style={estilos.cardTitulo}>INFORMAÇÕES</Text>

                    <View style={estilos.linha}>
                        <Text style={estilos.linhaLabel}>Categoria</Text>
                        <Text style={estilos.linhaValor}>{produto.categoria}</Text>
                    </View>
                    <View style={estilos.linha}>
                        <Text style={estilos.linhaLabel}>Fornecedor</Text>
                        <Text style={estilos.linhaValor}>{produto.fornecedor}</Text>
                    </View>
                    <View style={estilos.linha}>
                        <Text style={estilos.linhaLabel}>Código</Text>
                        <Text style={estilos.linhaValor}>{produto.codigo}</Text>
                    </View>
                    <View style={estilos.linha}>
                        <Text style={estilos.linhaLabel}>Status</Text>
                        <Text style={[estilos.linhaValor, { color: Cores.corprimaria, fontFamily: Fontes.baseBold }]}>{produto.status}</Text>
                    </View>
                </View>

                {/* parte do estoque */}
                <View style={estilos.card}>
                    <Text style={estilos.cardTitulo}>ESTOQUE</Text>
                    <View style={estilos.estoqueRow}>
                        <View style={estilos.quadrado}>
                            <Text style={estilos.tituloCard}>ATUAL</Text>
                            <Text style={[estilos.valorCard, { color: Cores.corprimaria }]}>{produto.estoque}</Text>
                            <Text style={estilos.descricaoCard}>unidades</Text>
                        </View>
                        <View style={estilos.quadrado}>
                            <Text style={estilos.tituloCard}>MÍNIMO</Text>
                            <Text style={[estilos.valorCard, { color: Cores.corprimaria }]}>{produto.qtdMin}</Text>
                            <Text style={estilos.descricaoCard}>unidades</Text>
                        </View>
                    </View>
                </View>

                {/*os preços */}
                <View style={estilos.card}>
                    <Text style={estilos.cardTitulo}>PREÇOS</Text>
                    <View style={estilos.estoqueRow}>
                        <View style={estilos.quadrado}>
                            <Text style={estilos.tituloCard}>CUSTO</Text>
                            <Text style={estilos.valorCard}>R${produto.precoCusto.toFixed(2)}</Text>
                            <Text style={estilos.descricaoCard}>preço de compra</Text>
                        </View>
                        <View style={estilos.quadrado}>
                            <Text style={estilos.tituloCard}>VENDA</Text>
                            <Text style={estilos.valorCard}>R${produto.precoVenda.toFixed(2)}</Text>
                            <Text style={estilos.descricaoCard}>preço ao cliente</Text>
                        </View>
                    </View>
                    <View style={estilos.margemRow}>
                        <Text style={estilos.linhaLabel}>Margem de lucro</Text>
                        <Text style={[estilos.linhaValor, { color: '#176243', fontFamily: Fontes.baseBold }]}>{margem}%</Text>
                    </View>
                </View>

                {/* o histórico */}
                <View style={estilos.card}>
                    <Text style={estilos.cardTitulo}>HISTÓRICO DE MOVIMENTAÇÕES</Text>

                    {historico.map((h) => (
                        <View key={h.id} style={estilos.historicoItem}>
                            <View style={[estilos.historicoBadge, { backgroundColor: h.tipo === 'Entrada' ? '#e7f6ed' : '#fdeaea' }]}>
                                <Text style={{ fontSize: Fontes.pequeno, fontFamily: Fontes.baseBold, color: h.tipo === 'Entrada' ? '#176243' : '#8b1f1f' }}>
                                    {h.tipo}
                                </Text>
                            </View>
                            <Text style={estilos.historicoQtd}>
                                {h.tipo === 'Entrada' ? '+' : '-'}{h.quantidade} un.
                            </Text>
                            <Text style={estilos.historicoInfo}>{h.responsavel}</Text>
                            <Text style={estilos.historicoInfo}>{h.data}</Text>
                        </View>
                    ))}
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
        padding: 16,
        gap: 12,
    },

    // Ações
    acoes: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 4,
    },
    btnPerigo: {
        borderWidth: 1.5,
        borderColor: Cores.corborda,
        backgroundColor: Cores.corfundo,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 10,
        alignItems: 'center',
    },
    btnPerigoTexto: {
        color: '#8b1f1f',
        fontFamily: Fontes.baseBold,
        fontSize: Fontes.medio1,
    },
    btnPrimario: {
        flex: 1,
        backgroundColor: Cores.corprimaria,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 10,
        alignItems: 'center',
    },
    btnPrimarioTexto: {
        color: Cores.corsuperficie,
        fontFamily: Fontes.baseBold,
        fontSize: Fontes.medio1,
    },

    // Card
    card: {
        backgroundColor: Cores.corsuperficie,
        borderRadius: 15,
        padding: 16,
        borderWidth: 1,
        borderColor: Cores.corborda,
        gap: 10,
    },
    cardTitulo: {
        fontSize: Fontes.pequeno,
        fontFamily: Fontes.baseBold,
        color: Cores.cortextosecundario,
        marginBottom: 4,
    },

    // Linha info
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderColor: Cores.corborda,
    },
    linhaLabel: {
        fontSize: Fontes.medio1,
        fontFamily: Fontes.baseRegular,
        color: Cores.cortextosecundario,
    },
    linhaValor: {
        fontSize: Fontes.medio1,
        fontFamily: Fontes.baseRegular,
        color: Cores.primariaEscura,
    },

    // Estoque / Preços
    estoqueRow: {
        flexDirection: 'row',
        gap: 12,
    },
    quadrado: {
        flex: 1,
        backgroundColor: Cores.corfundo,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Cores.corborda,
        padding: 14,
    },
    tituloCard: {
        fontSize: Fontes.pequeno,
        fontFamily: Fontes.baseBold,
        color: Cores.cortextosecundario,
        marginBottom: 4,
    },
    valorCard: {
        fontSize: Fontes.grande1,
        fontFamily: Fontes.baseBold,
        color: Cores.primariaEscura,
    },
    descricaoCard: {
        fontSize: Fontes.pequeno,
        fontFamily: Fontes.baseRegular,
        color: Cores.cortextosecundario,
        marginTop: 2,
    },
    margemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Cores.corfundo,
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 10,
    },

    // Histórico
    historicoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: Cores.corborda,
    },
    historicoBadge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 20,
    },
    historicoQtd: {
        fontSize: Fontes.medio1,
        fontFamily: Fontes.baseBold,
        color: Cores.primariaEscura,
        minWidth: 55,
    },
    historicoInfo: {
        fontSize: Fontes.pequeno,
        fontFamily: Fontes.baseRegular,
        color: Cores.cortextosecundario,
        flex: 1,
    },
})
