import { ImageSourcePropType } from "react-native";

export interface ILista {
    nome: string, 
    imagem: ImageSourcePropType,
    distancia: number,
    estrelas: number,
    cestas: [{
        detalhes: {
        nome: string,
        descricao: string,
        preco: string,
        imagem: ImageSourcePropType,
        },
        itens: {
            nome: string,
            imagem: ImageSourcePropType,
        }
    }],
}