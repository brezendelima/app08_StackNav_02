import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Motos() {
    let autor = "Bruno Rezende";
    let data = "29/05/2026";
    let imgCabecalho = require("../Img/moto_cab.png");
    let imgOrigem = require("../Img/moto_origem.png");
    let imgModelos = require("../Img/moto_modelos.png");

    const nav = useNavigation();

    return (
        <View style={estilos.fundo}>
            <View style={estilos.cab}>
                <Image source={imgCabecalho} style={estilos.cabImagem} />
                <View style={estilos.cabTextos}>
                    <Text style={estilos.cabRotulo}>MOTOS</Text>
                    <Text style={estilos.cabTitulo}>Curiosidades</Text>
                </View>
            </View>

            <TouchableOpacity style={estilos.botaoVoltar} onPress={() => nav.navigate("Principal")}>
                <Text style={estilos.botaoVoltarTexto}>← Voltar à Tela Inicial</Text>
            </TouchableOpacity>

            <ScrollView style={estilos.corpo} contentContainerStyle={estilos.corpoConteudo}>
                <Text style={estilos.subTitulo}>Introdução:</Text>
                <Text style={estilos.paragrafo}>
                    A motocicleta é um dos meios de transporte mais populares do mundo. Com mais de um bilhão de unidades em circulação, ela representa liberdade, praticidade e, para muitos, paixão.     No Brasil, as motos são essenciais para o transporte urbano e para milhões de trabalhadores que dependem delas no dia a dia.
                </Text>

                <Text style={estilos.destaque}>
                    Mas engana-se quem pensa que a moto é uma invenção recente — sua história começa no século XIX.
                </Text>

                <Text style={estilos.subTitulo}>Origem</Text>
                <Text style={estilos.paragrafo}>
                    A primeira motocicleta da história foi criada por Gottlieb Daimler em 1885, na Alemanha. Chamada de Reitwagen, ela era movida a motor a combustão e tinha estrutura de madeira. Alguns anos depois, as grandes montadoras europeias e americanas começaram a desenvolver modelos mais robustos e confiáveis para uso cotidiano.
                </Text>

                <Text style={estilos.subTitulo}>Curiosidades: Recordes</Text>
                <Image source={imgOrigem} style={estilos.imagem} />
                <Text style={estilos.paragrafo}>
                    A moto mais rápida já registrada atingiu 605 km/h em uma pista de sal nos Estados Unidos. O piloto usava um traje pressurizado similar ao de astronautas para suportar as forças aerodinâmicas. Esse recorde foi estabelecido em 2010 e permanece imbatido até hoje.
                </Text>

                <Text style={estilos.subTitulo}>Tipos e Categorias</Text>
                <Image source={imgModelos} style={estilos.imagem} />
                <Text style={estilos.paragrafo}>
                    Existem dezenas de categorias de motocicletas: naked, sport, cruiser, trail, scooter, custom e elétrica, entre outras. Cada tipo foi desenvolvido para um perfil diferente de piloto e de uso. As elétricas têm crescido rapidamente e prometem dominar o mercado nas próximas décadas.
                </Text>

                <Text style={estilos.subTitulo}>No Brasil</Text>
                <Text style={estilos.paragrafo}>
                    O Brasil é um dos maiores mercados de motos do mundo, com destaque para a região Norte, onde a motocicleta é o principal meio de transporte em muitas cidades. A cidade de Manaus abriga uma das maiores fábricas de motos da América Latina, produzindo marcas reconhecidas mundialmente.
                </Text>
            </ScrollView>

            <View style={estilos.rodape}>
                <Text style={estilos.textoRodape}>{autor}</Text>
                <Text style={estilos.textoRodape}>{data}</Text>
            </View>
        </View>
    );
}

const COR = "red";
const COR_TEXTO_BOTAO = "#FFFFFF";

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: COR,
        borderWidth: 5,
        borderColor: COR,
        borderRadius: 30,
        margin: 5,
        overflow: "hidden",
    },
    cab: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderBottomWidth: 3,
        borderBottomColor: COR,
    },
    cabImagem: {
        width: 90,
        height: 90,
        resizeMode: "contain",
        marginRight: 12,
    },
    cabTextos: {
        flex: 1,
        alignItems: "flex-end",
    },
    cabRotulo: {
        fontSize: 13,
        color: COR,
        fontWeight: "600",
        textAlign: "right",
    },
    cabTitulo: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#000",
        textAlign: "right",
    },
    botaoVoltar: {
        backgroundColor: COR,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center",
    },
    botaoVoltarTexto: {
        fontSize: 14,
        color: COR_TEXTO_BOTAO,
        fontWeight: "600",
    },
    corpo: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    corpoConteudo: {
        paddingHorizontal: 18,
        paddingVertical: 16,
    },
    subTitulo: {
        fontSize: 17,
        fontWeight: "bold",
        color: COR,
        marginTop: 16,
        marginBottom: 6,
    },
    paragrafo: {
        fontSize: 14,
        color: "#000",
        textAlign: "justify",
        lineHeight: 21,
        marginBottom: 8,
    },
    destaque: {
        fontSize: 17,
        fontWeight: "bold",
        color: COR,
        textAlign: "justify",
        marginVertical: 12,
        lineHeight: 24,
    },
    imagem: {
        width: "100%",
        height: 160,
        resizeMode: "contain",
        alignSelf: "center",
        marginVertical: 10,
    },
    rodape: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderTopWidth: 3,
        borderTopColor: COR,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    textoRodape: {
        fontSize: 14,
        color: "#000",
    },
});

export default Motos;