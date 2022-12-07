import bitoca from "../assets/productsImages/tshirtBitocas.png";
import humanos from "../assets/productsImages/tshirtNaoAcreditoEmHumanos.png";
import mundo from "../assets/productsImages/tshirtMinhaMenteDeOutroMundo.png";
import resgatado from "../assets/productsImages/tshirtResgatado.png";
import certezas from "../assets/productsImages/tshirtTresCertezasDaVida.png";
import astronauta from "../assets/productsImages/tshirtAstronautaNaLua.png";
import humanos2 from "../assets/productsImages/tshirtNaoAcreditoEmHumanos2.png";
import infinito from "../assets/productsImages/tshirtAoInfinitoAlem.png";
import espaco from "../assets/productsImages/tshirtPrecisoDeMaisEspaço.png";
import foguete from "../assets/productsImages/tshirtFogueteNaoTemRe.png";
import cansei from "../assets/productsImages/tshirtCanseiMeLeva.png"

export const getFeature = (feature) => {
    switch (feature) {
        case "bitoca":
            return bitoca;
        case "humanos":
            return humanos;
        case "mundo":
            return mundo;
        case "resgatado":
            return resgatado;
        case "certezas":
            return certezas;
        case "astronauta":
            return astronauta;
        case "humanos2":
            return humanos2;
        case "infinito":
            return infinito;
        case "espaco":
            return espaco;
        case "foguete":
            return foguete;
        case "cansei":
            return cansei;
        default:
            return "imagem produto";
    }
};