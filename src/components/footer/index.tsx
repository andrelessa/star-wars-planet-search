import * as Styles from './styles';

const Footer: React.FC = () => {
  return (
    <Styles.Footer>
      <Styles.Text>
        STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos
        reservados
      </Styles.Text>
      <Styles.Divisor />
      <Styles.Image src="/images/Logo_Footer.png" />
    </Styles.Footer>
  );
};

export default Footer;
