import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
function Modal() {
    const ButtonWrap = styled.div`
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        align-items: center;
    `;
    const Dark = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        z-index: 5;
    `;

    const SmallModalWrap = styled.div`
        width: 450px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        padding: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        background-color: white;
        border-radius: 8px;
    `;

    const SmallBtnWrap = styled.div`
        display: flex;
        gap: 10px;
    `;
    const LargeModalWrap = styled.div`
        width: 250px;
        height: 200px;
        padding: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        background-color: white;
        border-radius: 8px;
    `;

    const LargeModalBtn = styled.button`
        position: absolute;
        right: 10px;
    `;
    const [modal, setModal] = useState(false); // 작은 모달
    const [secmodal, setSecModal] = useState(false); // 큰 크기의 모달

    const SmallToggleModal = () => {
        // 작은 크기 모달을 열고 닫는 기능을 수행,
        setModal(!modal); // modal 상태 값을 토글하여 모달의 열림/닫힘 상태를 변경 --> 즉, modal 상태 값을 반전시킵니다.
    };

    const LargeToggleModal = () => {
        setSecModal(!secmodal);
    };
    return (
        <>
            <h1>Modal</h1> {/* 최상위 컴포넌트로, 모달 창을 렌더링하고 관리*/}
            <ButtonWrap>
                <Button size={'small'} color={'primary'} onClick={SmallToggleModal}>
                    {' '}
                    {/* Bottun.jsx props를 받아서 버튼을 렌더링 */}
                    open modal
                </Button>
                <Button size={'large'} color={'negative'} onClick={LargeToggleModal}>
                    open modal
                </Button>
            </ButtonWrap>
            {modal && ( // modal 상태 값이 true일 때 렌더링되면 jsx 코드 실행
                <>
                    <Dark></Dark>
                    <SmallModalWrap>
                        <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
                        <SmallBtnWrap>
                            <Button size={'small'} color={'primary'} onClick={SmallToggleModal}>
                                {' '}
                                {/*modal 상태 값을 토글하여 모달의 열림/닫힘 상태를 변경 시켜주어 닫음*/}
                                닫기
                            </Button>
                            <Button size={'small'} color={'negative'}>
                                확인
                            </Button>
                        </SmallBtnWrap>
                    </SmallModalWrap>
                </>
            )}
            {secmodal && (
                <>
                    <Dark onClick={LargeToggleModal}></Dark>{' '}
                    {/*onClick 이벤트를 외부에 눌렀을때 실행 시켜주어 외부 클릭으로도 모달이 닫힘 */}
                    <LargeModalWrap>
                        <LargeModalBtn onClick={LargeToggleModal}>X</LargeModalBtn>
                        <p>
                            닫기 버튼 1개가 있고, <br />
                            외부 영역을 누르면 모달이 닫혀요.
                        </p>
                    </LargeModalWrap>
                </>
            )}
        </>
    );
}

export default Modal;
