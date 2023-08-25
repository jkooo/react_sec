import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);

    const getBoardList = async () => {
        let data = [];
        for (let i = 0; i < 10; i++){
            let tmp = { };
            tmp.idx = i;
            tmp.title = i+"title";

            data.push(tmp);
        }

        //

        setBoardList(data); // 3) boardList 변수에 할당

    }

    useEffect(() => {
        getBoardList(); // 1) 게시글 목록 조회 함수 호출
    }, []);

    return (
        <div>
            <ul>
                {boardList.map((board) => (
                    // 4) map 함수로 데이터 출력
                    <li key={board.idx}>
                        <Link to={`/board/${board.idx}`}>{board.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoardList;