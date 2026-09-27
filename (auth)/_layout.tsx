import { Drawer } from 'expo-router/drawer'
import { router } from 'expo-router'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useAutenticacao } from '@/hooks/useAutenticacao'
import { MaterialIcons } from '@react-native-vector-icons/material-icons'
import { Fontes } from '@/constants/Fontes'
import { Cores } from '@/constants/Cores'

export default function Layout() {

  const { deslogar, deslogarContexto } = useAutenticacao()

  const desconectar = async () => {
    await deslogar()
    await deslogarContexto()
  }

  return (
    <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: Cores.corprimaria,
            },  
            headerStyle: {
              backgroundColor: Cores.corprimaria, 
            },
          }}
          
          drawerContent={() => (
          <View style={{ flex: 1, padding: 20 }}>
          <Text style={estilos.menu}>
            Menu
          </Text>

          {/* PRIMEIRO ITEM DO MENU (HOME) */}
          <TouchableOpacity
          style={estilos.drawerItem}
            onPress={() => router.navigate('/(auth)/Dashboard')}>
            <Text style={estilos.drawerIcon}><MaterialIcons name="dashboard" size={Fontes.grande1} color={Cores.primariaEscura} /></Text>
            <Text style={estilos.drawerText}>Home</Text>
        </TouchableOpacity>

        {/* SEGUNDO ITEM DO MENU (CADASTRO PRODUTOS) */}
          <TouchableOpacity
          style={estilos.drawerItem}
            onPress={() => router.navigate('/(auth)/CadastroProdutos')}>
            <Text style={estilos.drawerIcon}><MaterialIcons name="add-circle" size={Fontes.grande1} color={Cores.primariaEscura} /></Text>
            <Text style={estilos.drawerText}>Cadastro de Produtos</Text>
          </TouchableOpacity>

          {/* TERCEIRO ITEM DO MENU (LISTA DE PRODUTOS) */}
          <TouchableOpacity
          style={estilos.drawerItem}
            onPress={() => router.navigate('/(auth)/sobre')}>
            <Text style={estilos.drawerIcon}><MaterialIcons name="check" size={Fontes.grande1} color={Cores.primariaEscura} /></Text>
            <Text style={estilos.drawerText}>Lista de Produtos</Text>
          </TouchableOpacity>

          {/* QUARTO ITEM DO MENU (REGISTRAR MOVIMENTO) */}
          <TouchableOpacity
          style={estilos.drawerItem}
            onPress={() => router.navigate('/(auth)/sobre')}>
            <Text style={estilos.drawerIcon}><MaterialIcons name="swap-vert" size={Fontes.grande1} color={Cores.primariaEscura} /></Text>
            <Text style={estilos.drawerText}>Registrar Movimento</Text>
          </TouchableOpacity>

        {/* QUINTO ITEM DO MENU (HISTÓRICO) */}
          <TouchableOpacity
          style={estilos.drawerItem}
            onPress={() => router.navigate('/(auth)/sobre')}>
            <Text style={estilos.drawerIcon}><MaterialIcons name="history" size={Fontes.grande1} color={Cores.primariaEscura} /></Text>
            <Text style={estilos.drawerText}>Histórico</Text>
          </TouchableOpacity>

          {/* QUINTO ITEM DO MENU (Relatórios) */}
          <TouchableOpacity
          style={estilos.drawerItem}
            onPress={() => router.navigate('/(auth)/Relatorio')}>
            <Text style={estilos.drawerIcon}><MaterialIcons name="list" size={Fontes.grande1} color={Cores.primariaEscura} /></Text>
            <Text style={estilos.drawerText}>Relatórios</Text>
          </TouchableOpacity>

          {/* BUTÃO DE LOGOUT */}
          <TouchableOpacity
            onPress={desconectar}
            style={{ marginTop: 'auto' }}>
            <MaterialIcons name="logout" size={Fontes.grande1} color={Cores.primariaEscura} />
          </TouchableOpacity>
        </View>
        
      )}
      
      
    />
    )
}

const estilos = StyleSheet.create({
      menu: {
        fontFamily: Fontes.baseBold,
        fontSize: Fontes.medio2,
        marginBottom: 30,
      },

      drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 18,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: Cores.corsuperficieuave,
      },

      drawerIcon: {
        fontSize: Fontes.medio2,
        marginRight: 12,
      },

      drawerText: {
        fontFamily: Fontes.baseRegular,
        fontSize: Fontes.medio1,
        color: Cores.primariaEscura,
      },
    })