import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

function Input() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const nameValue = event => {
        setName(event.target.value); // 값이 변경될때 호출되는 이벤트 핸들러
    };

    const priceValue = event => {
        const newprice = event.target.value.replace(/\D/g, ''); // replace(/\D/g, "") 통해 숫자 이외의 값을 빈문자로 대체
        if (newprice === '') {
            setPrice('');
        } else {
            setPrice(Number(newprice).toLocaleString()); // toLocaleString을 통해 숫자 값이 있을 경우 문자열로 변환 (현지화된 숫자 표기법에 따라 천 자리에 쉼표(,)) 및 setPrice 통해 price 값으로 업데이트
        }
    };

    const ClickButtonHandler = () => {
        if (name.length === 0 && price.length === 0) {
            return alert('이름과 가격 모두 입력해주세요.');
        }
        alert(`name : ${name}, price : ${String(price).replaceAll(',', '')}`); // replaceAll 특정 문자 또는 문자열을 다른 문자열로 대체 -> , 를 빈문자로 변경
    };

    return (
        <>
            <h1>Input</h1>
            <InputBoxWrap>
                <InputBox>
                    <p>이름</p>
                    <MainInput value={name} onChange={nameValue} />
                </InputBox>
                <InputBox>
                    <p>가격</p>
                    <MainInput value={price} onChange={priceValue} placeholder="0" />{' '}
                    {/*placeholder 을 통해 0을 기준으로 입력 유도  */}
                </InputBox>
                <Button size={'small'} color={'primary'} onClick={ClickButtonHandler}>
                    저장
                </Button>
            </InputBoxWrap>
        </>
    );
}

const InputBoxWrap = styled.div`
    display: flex;
    gap: 20px;
`;
const InputBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const MainInput = styled.input`
    height: 30px;
    border: 1px solid black;
    border-radius: 8px;
`;
export default Input;
