import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Avioes() {
    let autor = "Bruno Rezende";
    let data = "29/05/2026";
    let imgCabecalho = require("../Img/aviao_cab.png");
    let imgOrigem = require("../Img/aviao_origem.png");
    let imgModerno = require("../Img/aviao_moderno.png");

    const nav = useNavigation();

    return (
        <View style={estilos.fundo}>
            <View style={estilos.cab}>
                <Image source={imgCabecalho} style={estilos.cabImagem} />
                <View style={estilos.cabTextos}>
                    <Text style={estilos.cabRotulo}>AVIÕES</Text>
                    <Text style={estilos.cabTitulo}>Curiosidades</Text>
                </View>
            </View>

            <TouchableOpacity style={estilos.botaoVoltar} onPress={() => nav.navigate("Principal")}>
                <Text style={estilos.botaoVoltarTexto}>← Voltar à Tela Inicial</Text>
            </TouchableOpacity>

            <ScrollView style={estilos.corpo} contentContainerStyle={estilos.corpoConteudo}>
                <Text style={estilos.subTitulo}>Introdução:</Text>
                <Text style={estilos.paragrafo}>
                    A aviação é uma das maiores conquistas da humanidade. Em pouco mais de cem anos, passamos de voos de poucos metros a cruzar oceanos em questão de horas.     Hoje, mais de 100 mil voos comerciais partem diariamente ao redor do mundo, conectando pessoas e culturas em todos os continentes.
                </Text>

                <Text style={estilos.destaque}>
                    Mas engana-se quem pensa que o avião foi inventado pelos Irmãos Wright — Santos Dumont também tem esse título, dependendo do critério adotado.
                </Text>

                <Text style={estilos.subTitulo}>Origem</Text>
                <Text style={estilos.paragrafo}>
                    Em 17 de dezembro de 1903, Orville Wright realizou o primeiro voo motorizado sustentado da história, com 12 segundos de duração e 36 metros de distância. Três anos depois, em 1906, o brasileiro Alberto Santos Dumont voou com o 14-Bis em Paris, sendo o primeiro voo reconhecido pela FAI por ter decolado sem auxílio externo ou catapulta.
                </Text>

                <Text style={estilos.subTitulo}>Curiosidades: Altitude e Velocidade</Text>
                <Image source={imgOrigem} style={estilos.imagem} />
                <Text style={estilos.paragrafo}>
                    Os aviões comerciais modernos cruzam o céu a cerca de 900 km/h, a uma altitude de 10 a 12 quilômetros. Nessa altura, a temperatura externa pode chegar a -60°C. O avião mais rápido já construído foi o SR-71 Blackbird da Força Aérea dos EUA, capaz de atingir 3.500 km/h — mais de três vezes a velocidade do som.
                </Text>

                <Text style={estilos.subTitulo}>O Maior Avião do Mundo</Text>
                <Image source={imgModerno} style={estilos.imagem} />
                <Text style={estilos.paragrafo}>
                    O Airbus A380 é o maior avião de passageiros em operação, com capacidade para até 853 pessoas em configuração toda econômica. Com envergadura de 79 metros, ele precisa de pistas especialmente reforçadas para pousar. Apesar de sua grandiosidade, a Airbus encerrou sua produção em 2021 devido à queda na demanda por aeronaves de grande porte.
                </Text>

                <Text style={estilos.subTitulo}>Aviação no Brasil</Text>
                <Text style={estilos.paragrafo}>
                    O Brasil é um dos maiores mercados de aviação do mundo e abriga a Embraer, terceira maior fabricante de aeronaves comerciais do planeta. Fundada em 1969, a empresa já exportou aviões para mais de 70 países. O Brasil também possui um dos territórios mais desafiadores para a aviação, com a Amazônia e regiões remotas onde o avião é o único meio de transporte viável.
                </Text>
            </ScrollView>

            <View style={estilos.rodape}>
                <Text style={estilos.textoRodape}>{autor}</Text>
                <Text style={estilos.textoRodape}>{data}</Text>
            </View>
        </View>
    );
}

const COR = "#E6C800";
const COR_TEXTO_BOTAO = "#000000";

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
        color: "#B8A000",
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
        color: "#B8A000",
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
        color: "#B8A000",
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

export default Avioes;