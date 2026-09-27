import { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MovimentoTipo } from '@/types/Movimento'
import { Cabecalho } from '@/components/Cabecalho'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons'
import { MaterialIcons } from '@react-native-vector-icons/material-icons'
/* 
Instalação: npx expo install react-native-paper react-native-paper-dates
react-native-paper-dates: A biblioteca do calendário em si.
react-native-paper: A biblioteca de UI baseada em Material Design 3 (obrigatória, pois o calendário herda os componentes e o provedor de temas dela).
*/
import { MD3LightTheme, PaperProvider } from 'react-native-paper'
import { DatePickerModal, registerTranslation } from 'react-native-paper-dates'

// Idioma (tradução de textos do componente)
registerTranslation('pt-BR', {
  save: 'Confirmar',
  selectSingle: 'Selecione a Data',
  selectMultiple: 'Selecione as Datas',
  selectRange: 'Selecione o Período',
  notAccordingToDateFormat: (inputFormat) => `A data deve seguir o formato ${inputFormat}`,
  mustBeHigherThan: (dateString) => `A data deve ser após ${dateString}`,
  mustBeLowerThan: (dateString) => `A data deve ser antes de ${dateString}`,
  mustBeBetween: (dateString1, dateString2) => `A data deve estar entre ${dateString1} e ${dateString2}`,
  dateIsDisabled: 'Esta data não é permitida',
  previous: 'Anterior',
  next: 'Próximo',
  typeInDate: 'Digitar data',
  pickDateFromCalendar: 'Escolher data do calendário',
  close: 'Fechar',
  hour: 'Hora',
  minute: 'Minuto',
})

const temaCustomizado = { ...MD3LightTheme, colors: {
        ...MD3LightTheme.colors,
        primary: Cores.primariaClara, // Cor do cabeçalho, botões e dia selecionado
        onSurface: Cores.primaria,    // Cor dos números dos dias
    },
}


export default function Registrarmovimento(){

    const [movimento, setMovimento] = useState<MovimentoTipo>(
        {produto: '', quantidade: '', movimento: '', data: new Date()}
    )

    const [exibirCalendario, setExibirCalendario] = useState(false)

    const confirmarData = (dataSelecionada: Date | undefined) => {
        if (dataSelecionada) {
            setMovimento({ ...movimento, data: dataSelecionada })
        }
        setExibirCalendario(false)
    }

    const salvar = () => {
        
    }
 const handleTextChange = (texto: string) => {
    const apenasNumeros = texto.replace(/[^0-9]/g, '');
    setNumero(apenasNumeros);
  };
    return(
        <SafeAreaView style={estilos.conteiner}>



                <View style={estilos.conteinerTela}>

                     <Text style={estilos.titulo}>Registrar Movimentação</Text>

                    <TextInput 
                        style={estilos.campo}
                        placeholder='Produto'
                        placeholderTextColor={Cores.secundariaClara}
                        value={movimento.produto}
                        onChangeText={(valor) => setMovimento({...movimento, produto: valor})}
                    />

                    <TextInput 
                        style={estilos.campo}
                        placeholder='Quantidade'
                        keyboardType="numeric"
                        placeholderTextColor={Cores.secundariaClara}
                        value={movimento.quantidade}
                        onChangeText={handleTextChange}
                        onChangeText={(valor) => setMovimento({...movimento, quantidade: valor})}
                    />

                    <TextInput 
                        style={estilos.campo}
                        placeholder='Movimento'
                        keyboardType="numeric"
                        placeholderTextColor={Cores.secundariaClara}
                        value={movimento.movimento}
                        onChangeText={handleTextChange}
                        onChangeText={(valor) => setMovimento({...movimento, movimento: valor})}
                    />

                    <Pressable style={estilos.campoCalendario} onPress={() => setExibirCalendario(true)} >
                        <MaterialIcons style={estilos.iconeCalendario} name="calendar-month" size={Fontes.grande1} color={Cores.primariaClara} />
                        <Text style={estilos.campoCalendarioRotulo}>{movimento.data.toLocaleDateString('pt-BR')}</Text>
                    </Pressable>
                
                    <DatePickerModal
                        locale='pt-BR'
                        mode='single'
                        visible={exibirCalendario}
                        onDismiss={() => setExibirCalendario(false)}
                        date={movimento.data}
                        onConfirm={({ date }: any) => confirmarData(date)}
                        validRange={{ endDate: new Date() }} // Impede a seleção de datas futuras (opcional)
                    />
                    
                    <Pressable 
                        style={estilos.botao}
                        android_ripple={{color: Cores.primariaClara}}
                        onPress={salvar}
                    >
                        <Text style={estilos.rotulo}>Salvar</Text>
                        <MaterialDesignIcons name="database-plus" size={Fontes.grande1} color={Cores.primariaClara} />
                    </Pressable>
                    
                </View>

                
            
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: Cores.corsuperficie
    },
    conteinerTela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
      fontSize: Fontes.grande1,
      color: Cores.corprimaria,
    },
    campo: {
        backgroundColor: Cores.corsuperficieuave,
        color: Cores.cortextosecundario,
        fontFamily: Fontes.baseRegular,
        fontSize: Fontes.medio1,
        borderWidth: 1,
        borderColor: Cores.corborda,
        height: 50,
        width: 300,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    campoCalendario: {
        flexDirection: 'row',
        alignItems: 'center',  
        backgroundColor: Cores.corsuperficieuave,
        height: 50,
        width: 300,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    iconeCalendario: {
        position: 'absolute',
        zIndex: 1,
        marginStart: 10,
    },
    campoCalendarioRotulo: {
        color: Cores.cortextosecundario,
        fontFamily: Fontes.baseRegular,
        fontSize: Fontes.medio1,
        marginStart: 40,
    },
    botao: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Cores.corsuperficieuave,
        borderColor: Cores.corborda,
        height: 50,
        width: 300,        
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
    },
    rotulo: {
        color: Cores.corASB,
        fontFamily: Fontes.baseRegular,
        fontSize: Fontes.medio1,
        marginEnd: 10,
    },
})