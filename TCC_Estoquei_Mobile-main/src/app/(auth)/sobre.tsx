import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { navigate } from 'expo-router/build/global-state/router'
import { useAutenticacao } from '@/hooks/useAutenticacao'
import { Drawer } from 'expo-router/drawer'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

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

                <Text style={estilos.titulo}>Sobre nós</Text>

                        <Text style={estilos.texto}> Nosso projeto de TCC da Etec Hortolândia tem como objetivo
                    desenvolver uma plataforma de gerenciamento de estoque
                    voltada para microempresas, criada para auxiliar
                    empreendedores no controle de produtos, fornecedores e
                    movimentações de estoque de forma simples, organizada e
                    eficiente.</Text>
                        <Text style={estilos.texto}>O sistema foi desenvolvido pensando nas dificuldades
                    encontradas por pequenos negócios no gerenciamento de
                    informações importantes, como entradas, saídas e
                    acompanhamento dos produtos disponíveis. A plataforma busca
                    oferecer uma solução prática e acessível, permitindo que o
                    controle do estoque seja realizado de maneira mais rápida e
                    intuitiva.</Text>
                        <Text style={estilos.texto}>Com uma interface organizada e de fácil utilização, o
                    projeto tem como propósito reduzir erros, melhorar a
                    administração dos recursos da empresa e facilitar a tomada
                    de decisões, contribuindo para uma gestão mais eficiente
                    mesmo para usuários com pouca experiência em sistemas de
                    gerenciamento.s</Text>
                    <Text style={estilos.titulo}>Integrantes do Grupo:</Text>
                    <Text style={estilos.texto}>Kauã da Silva Padovani</Text>
                    <Text style={estilos.texto}>Miguel Camilo da Silva</Text>
                    <Text style={estilos.texto}>Nicolas Henrique Chereda Pereira</Text>
                    <Text style={estilos.texto}>Paulo Alvex Estevão</Text>
                  

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
    texto: {
        fontSize: Fontes.medio1,
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