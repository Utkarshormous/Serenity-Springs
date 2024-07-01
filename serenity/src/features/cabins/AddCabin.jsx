import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm-v1';

function AddCabin() {
  // const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    //Compound Component Method for state  management
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
    // <div>
    //   <Button onClick={() => setIsOpenModal((show) => !show)}>
    //     Add New Cabin
    //   </Button>
    //   {isOpenModal && (
    //     <Modal onClose={() => setIsOpenModal(false)}>
    //       <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
    //     </Modal>
    //   )}
    // </div>
  );
}

export default AddCabin;
