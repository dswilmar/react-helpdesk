import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/auth';

function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password, name);
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="logo-area">
          <img src={ logo } alt="Logo do Sistema" />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Crie sua conta</h1>
          <input type="text" placeholder="Insira seu nome" value={name} onChange={(e) => setName(e.target.value)} autoFocus required />
          <input type="email" placeholder="Insira seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Cadastrar</button>
        </form>
        <Link to="/">Já possui uma conta? Faça login</Link>
      </div>
    </div>
  );
}
  
export default SignUp;
  