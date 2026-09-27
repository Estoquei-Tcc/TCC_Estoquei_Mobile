import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { DatePickerModal, registerTranslation } from 'react-native-paper-dates'
import { useState } from 'react'
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons'
import { MaterialIcons } from '@react-native-vector-icons/material-icons'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

const dados = [
  { id: '1', produto: 'Arroz', quantidade: '28', data: '27/09/2026', movimento: 'Entrou'},
  { id: '2', produto: 'Café', quantidade: '34', data: '22/09/2026', movimento: 'Entrou' },
  { id: '3', produto: 'Desodorante', quantidade: '22', data: '18/09/2026', movimento: 'Saiu' },
  { id: '4', produto: 'Estojo', quantidade: '44', data: '13/09/2026', movimento: 'Saiu' },
  { id: '5', produto: 'Fone', quantidade: '12', data: '05/09/2026', movimento: 'Saiu' },
  { id: '6', produto: 'Garrafa', quantidade: '31', data: '01/09/2026', movimento: 'Saiu' },
  { id: '7', produto: 'Celular', quantidade: '2', data: '29/08/2026', movimento: 'Entrou' },
  { id: '8', produto: 'Ventilador', quantidade: '16', data: '22/08/2026', movimento: 'Entrou' },
  { id: '9', produto: 'Carregador', quantidade: '97', data: '17/08/2026', movimento: 'Saiu' },
  { id: '10', produto: 'Cotonete', quantidade: '12', data: '12/08/2026', movimento: 'Entrou' },
  { id: '11', produto: 'Carteira', quantidade: '43', data: '08/08/2026', movimento: 'Entrou' },
  { id: '12', produto: 'Chinelo', quantidade: '6', data: '03/08/2026', movimento: 'Entrou' },
];
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
export default function Historico() {

    const [exibirCalendario, setExibirCalendario] = useState(false)
    const confirmarData = (dataSelecionada: Date | undefined) => {
        setExibirCalendario(false)
    }
  return (
     <SafeAreaView style={estilos.conteiner}>
      <Text style={estilos.titulo}>Historico de Movimentação</Text>
    <Pressable style={estilos.campoCalendario} onPress={() => setExibirCalendario(true)} >
                        <MaterialIcons style={estilos.iconeCalendario} name="calendar-month"  color={Cores.corprimaria} />
                        <Text style={estilos.campoCalendarioRotulo}>filtrar por data</Text>
                    </Pressable>
                
                    <DatePickerModal
                        locale='pt-BR'
                        mode='single'
                        visible={exibirCalendario}
                        onDismiss={() => setExibirCalendario(false)}
                        onConfirm={({ date }: any) => confirmarData(date)}
                    />
    <ScrollView horizontal={true} style={estilos.tabela}>
      <View>
        <View style={[estilos.linha, estilos.cabecalho]}>
          <Text style={[estilos.celula, estilos.textoCabecalho]}>Produto</Text>
          <Text style={[estilos.celula, estilos.textoCabecalho]}>Quantidade</Text>
          <Text style={[estilos.celula, estilos.textoCabecalho]}>Data</Text>
          <Text style={[estilos.celula, estilos.textoCabecalho]}>Movimento</Text>
        </View>

        
        {dados.map((movimento, index) => (
          <View 
            key={movimento.id} 
            style={[estilos.linha]}
          >
            <Text style={estilos.celula}>{movimento.produto}</Text>
            <Text style={estilos.celula}>{movimento.quantidade}</Text>
            <Text style={estilos.celula}>{movimento.data}</Text>
             <Text style={estilos.celula}>{movimento.movimento}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
     </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: Cores.corfundo,
    },
    titulo:{
        fontSize: Fontes.medio2,
        fontFamily: Fontes.baseBold,
        fontWeight: '800',
        color: Cores.primariaEscura,
        marginBottom: 16,
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
        borderColor: Cores.corbordadestaque,
        borderWidth: 1,
        color: Cores.cortextosecundario,
    },
    iconeCalendario: {
        position: 'absolute',
        zIndex: 1,
        marginStart: 10
    },
    campoCalendarioRotulo: {
        color: Cores.corprimaria,
         fontFamily: Fontes.baseRegular,
        fontSize: Fontes.medio1,
        marginStart: 30
    },
    tabela: {
    
  },
  linha: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Cores.corbordadestaque,
    alignItems: 'center',
  },
  cabecalho: {
    backgroundColor: Cores.corprimaria,
    height: 45,
  },
  textoCabecalho: {
    color: Cores.cortextoclaro,
    fontFamily: Fontes.baseRegular,
    fontSize: Fontes.medio1,  
  },
  celula: {
    width: 100,
    padding: 10,
    textAlign: 'center',
    fontFamily: Fontes.baseRegular,
    fontSize: Fontes.pequeno,
    color: Cores.cortextosecundario,
  },
});