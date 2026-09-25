import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Drawer } from 'expo-router/drawer'
import { Cores } from '@/constants/Cores'

export default function Relatorios(){

    return(
        <SafeAreaView style={estilos.conteiner}>

            <Drawer.Screen options={{ title: 'Relatórios' }} />

            <ScrollView contentContainerStyle={estilos.scroll}>

                <Text style={estilos.titulo}>Relatório</Text>

                <View style={estilos.quadrado}>
                    <Text style={estilos.tituloCard}>Gastos</Text>
                    <Text style={estilos.valorCard}>R$ 740,00</Text>

                    <View style={estilos.linhaInfo}>
                        <Text style={estilos.chave}>Fornecedores</Text>
                        <Text style={estilos.valor}>R$ 640,00</Text>
                    </View>
                    <View style={estilos.linhaInfo}>
                        <Text style={estilos.chave}>Outros</Text>
                        <Text style={estilos.valor}>R$ 100,00</Text>
                    </View>
                </View>

                <View style={estilos.quadrado}>
                    <Text style={estilos.tituloCard}>Lucro</Text>
                    <Text style={estilos.valorCard}>R$ 1.240,00</Text>

                    <View style={estilos.linhaInfo}>
                        <Text style={estilos.chave}>Receita total</Text>
                        <Text style={estilos.valor}>R$ 2.130,00</Text>
                    </View>
                    <View style={estilos.linhaInfo}>
                        <Text style={estilos.chave}>Gastos totais</Text>
                        <Text style={estilos.valor}>R$ 640,00</Text>
                    </View>
                    <View style={estilos.linhaInfo}>
                        <Text style={estilos.chave}>Lucro líquido</Text>
                        <Text style={estilos.valor}>R$ 1.240,00</Text>
                    </View>
                </View>

                <View style={estilos.quadrado}>
                    <Text style={estilos.tituloCard}>Detalhes</Text>

                    <View style={estilos.linhaInfo}>
                        <Text style={estilos.chave}>Produtos vendidos</Text>
                        <Text style={estilos.valor}>142 un.</Text>
                    </View>
                    <View style={estilos.linhaInfo}>
                        <Text style={estilos.chave}>Ticket médio</Text>
                        <Text style={estilos.valor}>R$ 24,30</Text>
                    </View>
                    <View style={estilos.linhaInfo}>
                        <Text style={estilos.chave}>Categoria líder</Text>
                        <Text style={estilos.valor}>Alimentos</Text>
                    </View>
                    <View style={estilos.linhaInfo}>
                        <Text style={estilos.chave}>Melhor dia</Text>
                        <Text style={estilos.valor}>Sexta-feira</Text>
                    </View>
                </View>

                <View style={estilos.quadrado}>
                    <Text style={estilos.tituloCard}>Pendências</Text>

                    <View style={estilos.linhaInfo}>
                        <Text style={estilos.chave}>Produtos zerados</Text>
                        <Text style={estilos.valor}>2</Text>
                    </View>
                    <View style={estilos.linhaInfo}>
                        <Text style={estilos.chave}>Estoque baixo</Text>
                        <Text style={estilos.valor}>3</Text>
                    </View>
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
        padding: 10,
        paddingBottom: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: '800',
        color: Cores.primariaEscura,
        marginBottom: 16,
    },
    quadrado: {
        backgroundColor: Cores.corsuperficie,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Cores.corborda,
        padding: 14,
        marginBottom: 12,
    },
    tituloCard: {
        fontSize: 12,
        fontWeight: '700',
        color: Cores.corprimaria,
        marginBottom: 6,
    },
    valorCard: {
        fontSize: 22,
        fontWeight: '800',
        color: Cores.corprimariahover,
        marginBottom: 10,
    },
    linhaInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
        borderTopWidth: 1,
        borderTopColor: Cores.corsuperficieuave,
    },
    chave: {
        fontSize: 13,
        color: Cores.primariaEscura,
    },
    valor: {
        fontSize: 13,
        fontWeight: '700',
        color: Cores.corprimaria,
    },
})