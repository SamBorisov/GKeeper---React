
export default function Footer() {

    let name = "Your Name";
    let day = new Date().getFullYear();

    return(
        <footer>
         <p>{name} Copyright © {day} </p>
        </footer>
    )
}