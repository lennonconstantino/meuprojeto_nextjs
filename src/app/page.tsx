
// criando uma tipagem
interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  }
}

async function getData() {
  // https://api.github.com/users/devfraga/repos
  // const response = await fetch("https://api.github.com/users/devfraga/repos");
  const response = await fetch("https://api.github.com/users/lennonconstantino/repos");
  return response.json();
}

export default async function Home() {
  // nao precisamos usar o useEffect
  const data: DataProps[] = await getData();
  console.log(data);
  return(
    <main>
      <h1>Pagina Home</h1>
      <span>Seja bem vindo a minha pagina home</span>
      <br/>
      <h3> Meus repositorios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositorio: </strong><a>{item.name}</a>
          <br />
          <br />
        </div>
      ))}
    </main>
  )
}
