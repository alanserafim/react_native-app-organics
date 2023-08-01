import {useEffect, useState} from 'react';
import {ILista} from '../shared/interfaces/ILista';
import {carregaProdutores} from '../services/carregaDados';

export const useProdutores = () => {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState<ILista[]>();

  useEffect(() => {
    const retorno = carregaProdutores();
    retorno.lista.sort(
      (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
  );
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  return {
    titulo,
    lista,
  };
};
