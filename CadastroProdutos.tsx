import { StyleSheet, View, Text, TouchableOpacity, TextInput, Switch, Alert, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { navigate } from 'expo-router/build/global-state/router'
import { Drawer } from 'expo-router/drawer'
import { useState } from 'react'
import { Cores } from '@/constants/Cores' 

export default function CadastroProdutos() {

    const [nome,     setNome]     = useState('')
    const [codigo,   setCodigo]   = useState('')
    const [categoria,setCategoria]= useState('')
    const [marca,    setMarca]    = useState('')
    const [custo,    setCusto]    = useState('')
    const [venda,    setVenda]    = useState('')
    const [estoque,  setEstoque]  = useState('')
    const [minimo,   setMinimo]   = useState('')
    const [ativo,    setAtivo]    = useState(true)

    const cadastrar = () => {
        if (!nome || !codigo) {
            Alert.alert('Atenção', 'Nome e código são obrigatórios.')
            return
        }
        Alert.alert('Sucesso', 'Produto cadastrado com sucesso!')
        navigate('/ListaProdutos')
    }

    return (
        <SafeAreaView style={estilos.conteiner}>
            <Drawer.Screen options={{ title: 'Cadastro de Produto' }} />

            <ScrollView contentContainerStyle={estilos.scroll}>
                <View style={estilos.card}>

                    <Text style={estilos.label}>Nome do produto</Text>
                    <TextInput
                        style={estilos.input}
                        placeholder="Digite o nome do produto"
                        value={nome}
                        onChangeText={setNome}
                    />

                    <Text style={estilos.label}>Código</Text>
                    <TextInput
                        style={estilos.input}
                        placeholder="Digite o código do produto"
                        value={codigo}
                        onChangeText={setCodigo}
                        keyboardType="numeric"
                    />

                    <Text style={estilos.label}>Categoria</Text>
                    <TextInput
                        style={estilos.input}
                        placeholder="Digite a categoria"
                        value={categoria}
                        onChangeText={setCategoria}
                    />

                    <Text style={estilos.label}>Marca</Text>
                    <TextInput
                        style={estilos.input}
                        placeholder="Digite a marca"
                        value={marca}
                        onChangeText={setMarca}
                    />

                    <View style={estilos.dupla}>
                        <View style={estilos.metade}>
                            <Text style={estilos.label}>Preço de custo</Text>
                            <TextInput
                                style={estilos.input}
                                placeholder="0,00"
                                value={custo}
                                onChangeText={setCusto}
                                keyboardType="decimal-pad"
                            />
                        </View>
                        <View style={estilos.metade}>
                            <Text style={estilos.label}>Preço de venda</Text>
                            <TextInput
                                style={estilos.input}
                                placeholder="0,00"
                                value={venda}
                                onChangeText={setVenda}
                                keyboardType="decimal-pad"
                            />
                        </View>
                    </View>

                    <View style={estilos.dupla}>
                        <View style={estilos.metade}>
                            <Text style={estilos.label}>Estoque</Text>
                            <TextInput
                                style={estilos.input}
                                placeholder="0"
                                value={estoque}
                                onChangeText={setEstoque}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={estilos.metade}>
                            <Text style={estilos.label}>Qtd. mínima</Text>
                            <TextInput
                                style={estilos.input}
                                placeholder="0"
                                value={minimo}
                                onChangeText={setMinimo}
                                keyboardType="numeric"
                            />
                        </View>
                    </View>

                    <View style={estilos.toggleRow}>
                        <View>
                            <Text style={estilos.label}>Produto ativo</Text>
                            <Text style={estilos.toggleSub}>Disponível para venda na loja.</Text>
                        </View>
                        <Switch
                            value={ativo}
                            onValueChange={setAtivo}
                            thumbColor={Cores.corsuperficie}
                            trackColor={{ false: '#cac6c6', true: Cores.corprimaria }}
                        />
                    </View>

                    <TouchableOpacity style={estilos.botao} onPress={cadastrar}>
                        <Text style={estilos.botaoTexto}>Cadastrar produto</Text>
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
        padding: 15,
    },
    card: {
        backgroundColor: Cores.corsuperficie,
        borderRadius: 15,
        padding: 15,
        gap: 10,
        borderWidth: 1,
        borderColor: Cores.corborda,
    },
    label: {
        fontSize: 13,
        fontWeight: '700',
        color: Cores.corprimaria,
        marginBottom: 2,
    },
    input: {
        backgroundColor: Cores.corfundo,
        borderWidth: 1,
        borderColor: Cores.corborda,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        color: Cores.primariaEscura,
    },
    dupla: {
        flexDirection: 'row',
        gap: 12,
    },
    metade: {
        flex: 1,
    },
    toggleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 6,
    },
    toggleSub: {
        fontSize: 12,
        color: Cores.cortextosecundario,
        marginTop: 2,
    },
    botao: {
        backgroundColor: Cores.corprimaria,
        paddingVertical: 14,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
    botaoTexto: {
        color: Cores.corsuperficie,
        fontWeight: '900',
        fontSize: 15,
    },
})
