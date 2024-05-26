import '../App.css';
import '../vendor/fontawesome-free/css/all.min.css';
import '../css/sb-admin-2.min.css'
import '../vendor/datatables/dataTables.bootstrap4.min.css'


const listaCampo = ({
    pedido, doador, cpf, status, dataDoacao, valor
}) => {
    <tr>
      <th>{pedido}</th>
      <th>{doador}</th>
      <th>{cpf}</th>
      <th>{status}</th>
      <th>{dataDoacao}</th>
      <th>{valor}</th>
    </tr>
} 