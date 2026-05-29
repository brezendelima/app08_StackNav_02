import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Carros() {
    let autor = "Bruno Rezende";
    let data = "29/05/2026";
    let imgCabecalho = require("../Img/carro_cab.png");
    let imgOrigem = require("../Img/carro_origem.png");
    let imgFormula = require("../Img/carro_formula.png");

    const nav = useNavigation();

    return (
        <View style={estilos.fundo}>
            <View style={estilos.cab}>
                <Image source={imgCabecalho} style={estilos.cabImagem} />
                <View style={estilos.cabTextos}>
                    <Text style={estilos.cabRotulo}>CARROS</Text>
                    <Text style={estilos.cabTitulo}>Curiosidades</Text>
                </View>
            </View>

            <TouchableOpacity style={estilos.botaoVoltar} onPress={() => nav.navigate("Principal")}>
                <Text style={estilos.botaoVoltarTexto}>← Voltar à Tela Inicial</Text>
            </TouchableOpacity>

            <ScrollView style={estilos.corpo} contentContainerStyle={estilos.corpoConteudo}>
                <Text style={estilos.subTitulo}>Introdução:</Text>
                <Text style={estilos.paragrafo}>
                    O automóvel transformou a civilização moderna de forma irreversível. Desde sua invenção, no final do século XIX, o carro passou de luxo exclusivo a necessidade cotidiana para bilhões de pessoas.     Hoje, há mais de 1,4 bilhão de veículos em circulação no mundo, e esse número cresce a cada ano.
                </Text>

                <Text style={estilos.destaque}>
                    Mas engana-se quem pensa que o carro elétrico é uma novidade — ele existia antes do carro a gasolina.
                </Text>

                <Text style={estilos.subTitulo}>Origem</Text>
                <Text style={estilos.paragrafo}>
                    O primeiro automóvel prático movido a combustão interna foi criado por Karl Benz em 1885, na Alemanha. O Benz Patent-Motorwagen tinha três rodas e motor de um cilindro. Curiosamente, foi a esposa de Benz, Bertha, quem realizou o primeiro percurso de longa distância de carro da história, provando a viabilidade do invento ao mundo.
                </Text>

                <Text style={estilos.subTitulo}>Curiosidades: Ford e a Produção em Massa</Text>
                <Image source={imgOrigem} style={estilos.imagem} />
                <Text style={estilos.paragrafo}>
                    Em 1913, Henry Ford revolucionou a indústria ao introduzir a linha de montagem em série. O famoso Modelo T passou a ser produzido em poucas horas, tornando o carro acessível à classe média americana. Essa inovação mudou não apenas a indústria automobilística, mas toda a manufatura industrial moderna.
                </Text>

                <Text style={estilos.subTitulo}>Velocidade e Corridas</Text>
                <Image source={imgFormula} style={estilos.imagem} />
                <Text style={estilos.paragrafo}>
                    O carro de produção mais rápido do mundo atualmente ultrapassa 480 km/h. As corridas de Fórmula 1 impulsionaram dezenas de inovações tecnológicas que hoje estão nos carros comuns: freios a disco, câmbio automático, controle de tração e até o volante multifuncional tiveram origem nas pistas de corrida.
                </Text>

                <Text style={estilos.subTitulo}>O Futuro: Carros Elétricos e Autônomos</Text>
                <Text style={estilos.paragrafo}>
                    Os veículos elétricos estão crescendo exponencialmente. Em 2023, mais de 14 milhões de carros elétricos foram vendidos no mundo. Paralelamente, os carros autônomos já circulam em testes em diversas cidades dos Estados Unidos, China e Europa, prometendo reduzir drasticamente os acidentes causados por erro humano.
                </Text>
            </ScrollView>

            <View style={estilos.rodape}>
                <Text style={estilos.textoRodape}>{autor}</Text>
                <Text style={estilos.textoRodape}>{data}</Text>
            </View>
        </View>
    );
}

const COR = "darkblue";
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

export default Carros;