import { FooterContainer } from "./styles"
import logoGitHub from "../../assets/logoGitHubLight.png"
import logoLinkedin from "../../assets/logoLinkedin.png"

export function Footer() {

    return (
        <FooterContainer>
            <span>Desenvolvido por Aline Kabbas</span>
            <div>
                <a href="https://github.com/alinekabbas" target="blank">
                <img src={logoGitHub} alt="logo GitHub" /></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/aline-kabbas/" target="blank">
                <img src={logoLinkedin} alt="logo Linkedin" /></a>
            </div>
        </FooterContainer>
    )
}