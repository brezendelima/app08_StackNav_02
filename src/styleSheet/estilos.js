import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

    Tela_Principal_fundo: {
        flex: 1,
        backgroundColor: "#EAEAEA",
        borderWidth: 5,
        borderColor: "#7A0000",
        borderRadius: 30,
        margin: 5,
    },

    Tela_Principal_Cab: {
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#7A0000",
    },

    Tela_Principal_RotuloTopo: {
        fontSize: 14,
        color: "#000",
        textAlign: "center",
        marginBottom: 2,
    },

    Tela_Principal_Titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        lineHeight: 34,
    },

    Tela_Principal_SubTitulo1: {
        fontSize: 14,
        color: "#000",
        textAlign: "center",
        marginTop: 2,
    },

    Tela_Principal_Imagem: {
        width: 140,
        height: 140,
        alignSelf: "center",
        marginVertical: 20,
        resizeMode: "contain",
    },

    Tela_Principal_Corpo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 10,
        alignItems: "center",
    },

    Tela_Principal_SubTitulo2: {
        fontSize: 22,
        fontWeight: "600",
        color: "#000",
        textAlign: "center",
        marginBottom: 18,
    },

    Tela_Principal_Botoes: {
        width: "100%",
        height: 48,
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: "#7A0000",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
    },

    Tela_Principal_TextoBotao: {
        fontSize: 16,
        color: "#000",
    },

    Tela_Principal_Rodape: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#7A0000",
        paddingHorizontal: 20,
        paddingVertical: 12,
    },

    Tela_Principal_TextoRodape: {
        fontSize: 14,
        color: "#000",
    },

});