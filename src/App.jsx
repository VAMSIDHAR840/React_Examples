import A from "./PropsDrilling_and_PropsExample/A"
import Nav from "./PropsDrilling_and_PropsExample/Nav"
import DarkandLight from "./DarkandLightTheme/DarkandLight"
import Confrom from "./Forms/Confrom"
import Uncon from "./Forms/Uncon"
import Age from "./HigherOrderFunction/Age"
import Age1 from "./HigherOrderFunction/Age1"
import Higher from "./HigherOrderFunction/Higher"
import Calculation from "./UseRef/Calculation"
import Ref from "./UseRef/Ref"
import Main from "./UseCallback_and_Usememo/Main"
import UseMemo from "./UseCallback_and_Usememo/UseMemo"
import AlltheData from "./UsingAxios/AlltheData"
import User from "./UsingAxios/User"
import Para from "./Thameez/Para"
import IncDec from "./BasicHooks/IncDec"
import Access from "./HigherOrderFunction/Access"
let App = () => {
    let obj = {
        name: "Vamsi",
        age: 23,
        place: "Banglore"
    }
    let web = [
        {
            name: "HTML",
            use: "Is Used to create a Webpage"
        },
        {
            name: " CSS",
            use: " is used to apply Styles for the Webpage",
        },
        {
            name: "JS",
            use: " IS used to add additional functionality"
        }
    ]
    return (
        <div>

            {/* Send a Prop as a Data */}
            {/* <Nav data="Good Morning" /> */}

            {/* Send a Array as a Prop */}
            {/* <Nav a={["Vamsi","Iyer","Jadeja"]} /> */}

            {/* Send a Object as a Prop */}
            {/* <Nav xyz={obj} /> */}

            {/* Send a Array of Object as a Prop */}
            {/* <Nav pqr={web} /> */}

            {/* Props Drilling Example */}
            {/* <A/> */}

            {/* Increament and Decreament Example */}
            {/* <IncDec/> */}

            {/* By Using the DummyData Without Using axios Fetch the Data */}
            {/* <User /> */}

            {/* With Using axios */}
            {/* <AlltheData/> */}


            {/* Apply the Dark and light Theme */}
            {/* <DarkandLight/> */}


            {/* Calculation Using UseRef */}
            {/* <Calculation/> */}

            {/* Using Useref Apply the style */}
            {/* <Ref /> */}

            {/* Controlled Forms */}
            {/* <Confrom/> */}

            {/* Uncontrolled Form */}
            {/* <Uncon/> */}


            {/* Higher Order function Example */}
            {/* <Higher/>
            <Age/>
            <Age1/>
            <Access/> */}


            {/* Usecallback Example */}
            {/* <Main/> */}


            {/* Usememo Example */}
            {/* <UseMemo/> */}


            {/* Paragraph Hidden and Visibility */}
            {/* <Para/> */}

            {/* Button of and on */}
            {/* <ButtonOnOff/> */}




        </div>
    )
}
export default App