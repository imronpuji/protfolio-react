import LetMeIntroduce from "../components/Sections/LetMeIntroduce"
import MyDesc from "../components/Sections/MyDesc"
import WrapperAnimate from "../components/WrapperAnimate"
export default function Homepage(){
    return (
        <div>
            <WrapperAnimate duration={1}>
            <LetMeIntroduce/>
            </WrapperAnimate>
            <WrapperAnimate duration={1.5}>
            <MyDesc/>
            </WrapperAnimate>
        </div>
    )
}