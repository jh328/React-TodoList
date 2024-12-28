const ToDo = ({ onClick, value, isComplete }) => {
  return (
    <div className="to-do" data-is-complete={isComplete} onClick={onClick}>
      <p>{isComplete && <span>&#10004;</span>}</p>
      <p>{value}</p>
    </div>
  );
};

export default ToDo;

// 우선 여기 코드 이해가 안되는게 data-is-complete 이해 안되고 
// 4번 로직 이해 안됨 true일 때만 설정을 하는게 어떻게 저렇게 되는건지 이해가 안되서 그럼. 아 AND 연산자여서 둘 다 true이면 이모지를 반환을 해주는거네