import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { estilos } from "../styleSheet/estilos.js";

function Principal() {
    let img1 = require("../Img/fig01.png");
    let autor = "Bruno Rezende";
    let data = "29/05/2026";

    const nav = useNavigation();

    function acessaTela(Tela) {
        if (Tela === "M") nav.navigate("Motos");
        if (Tela === "C") nav.navigate("Carros");
        if (Tela === "A") nav.navigate("Avioes");
    }

    return (
        <View style={estilos.Tela_Principal_fundo}>
            <View style={estilos.Tela_Principal_Cab}>
                <Text style={estilos.Tela_Principal_RotuloTopo}>Tela Principal</Text>
                <Text style={estilos.Tela_Principal_Titulo}>Stack Navigation</Text>
                <Text style={estilos.Tela_Principal_SubTitulo1}>DSV Mobile</Text>
            </View>

            <View style={estilos.Tela_Principal_Corpo}>
                <Image source={img1} style={estilos.Tela_Principal_Imagem} />

                <Text style={estilos.Tela_Principal_SubTitulo2}>Curiosidades</Text>

                <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela("M")}>
                    <Text style={estilos.Tela_Principal_TextoBotao}>Motos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela("C")}>
                    <Text style={estilos.Tela_Principal_TextoBotao}>Carros</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela("A")}>
                    <Text style={estilos.Tela_Principal_TextoBotao}>Aviões</Text>
                </TouchableOpacity>
            </View>

            <View style={estilos.Tela_Principal_Rodape}>
                <Text style={estilos.Tela_Principal_TextoRodape}>{autor}</Text>
                <Text style={estilos.Tela_Principal_TextoRodape}>{data}</Text>
            </View>
        </View>
    );
}

export default Principal;