type HelloProps = {
  name:string;
}

const Hello:React.FC<HelloProps> = ({name}) => {
  return <div>안녕하세요 {name}</div>
}

export default Hello;