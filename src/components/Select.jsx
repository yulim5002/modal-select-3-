import React from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Select() {
    // option을 SeletBox의 props로 내려주기

    const OPTIONS = [
        // option 항목 만들어주기,
        { value: 1, name: '리액트' },
        { value: 2, name: '자바' },
        { value: 3, name: '스피링' },
        { value: 4, name: '리액트 네이티브' },
    ];

    const SelectBox = styled.select`
        width: 245px;
        height: 40px;
        padding: 0 20px;
        margin: 10px;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        border: 1px solid lightgrey;
        border-radius: 10px;
        cursor: pointer; //cursor 속성을 pointer로 설정하여 마우스 커서를 변경
    `;

    const handleChange = e => {
        // 선택 상자의 값이 변경될 때 호출 콘솔에 출력
        console.log(e.target.value);
    };

    return (
        <Wrap>
            <h1>Select</h1>
            <SelectBox onChange={handleChange} defaultValue={1}>
                {OPTIONS.map(
                    (
                        option, // map 함수로 순회하며 옵션을 엘리먼트오 만들어 넣기
                    ) => (
                        <option key={option.value} value={option.value}>
                            {' '}
                            {/*key 속성은 고유한 식별자, value 속성은 선택 상자의 값 */}
                            {option.name} {/* 선택 옵션의 이름 나타내기*/}
                        </option>
                    ),
                )}
            </SelectBox>
            <SelectBox onChange={handleChange} defaultValue={1}>
                {OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </SelectBox>
        </Wrap>
    );
}
const Wrap = styled.div`
    border: 3px solid lightgrey;
    margin-top: 30px;
    overflow: hidden;
`;

export default Select;
