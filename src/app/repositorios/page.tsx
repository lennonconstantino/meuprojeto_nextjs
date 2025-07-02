"use client"
import {useState, useEffect } from 'react'

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

export default function Repositorios() {
    const [repos, setRepos] = useState<DataProps[]>([])

    useEffect(() => {
        function getData() {
            fetch("https://api.github.com/users/lennonconstantino/repos")
                .then(response => response.json())
                .then((data) => {
                    setTimeout(() => {
                        setRepos(data);
                    }, 1000)
                })
        }

        getData();
    }, []);

    return(
        <div>
            <h1>Página de Repositorios</h1>
            {repos.map((item) => (
                <div key={item.id}>
                <strong>Repositorio: </strong><a>{item.name}</a>
                <br />
                <br />
                </div>
            ))}
        </div>
    )
}