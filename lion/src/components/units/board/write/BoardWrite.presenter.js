import { RedInput, BlueButton } from './BoardWrite.styles'

export default function BoardWriteUI(props) {
    //presnet는 UI만 담고 로직은 쓰지말자


    return (
        <div>
            <div>@@@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@@@</div>
            <div>
                작성자: <RedInput type="text" onChange={props.bbb} />
                제목: <input type="text" onChange={props.ccc} />
                내용: <input type="text" onChange={props.ddd} />
                <BlueButton onClick={props.aaa} >GRAPHQL-API요청하기</BlueButton >
            </div>
            <div>@@@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@@@</div>
        </div>
    )
}