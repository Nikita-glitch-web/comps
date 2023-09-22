import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [ showModal, setShowModal ] = useState(false)

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div><Button onClick={handleClose} primary>I accept</Button></div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return (
      <div>
        <Button onClick={handleClick} primary>
          Open Modal
        </Button>
        {showModal && modal}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
          amet urna elementum, mollis velit vulputate, faucibus erat. Curabitur
          purus elit, sollicitudin non sagittis eu, pharetra ut leo. Donec
          sodales metus vitae tortor molestie maximus. Aliquam viverra dignissim
          ex. Cras id erat ligula. Nullam eget tortor nec felis volutpat
          malesuada quis nec nisl. Mauris dapibus neque in semper ullamcorper.
          Aliquam vestibulum felis eget turpis condimentum, et interdum eros
          consequat. Pellentesque libero velit, vehicula mattis elit facilisis,
          finibus pretium ligula. Suspendisse quis mi semper, varius tortor
          vitae, fermentum mi. Pellentesque vel interdum dui. Fusce lorem ante,
          vehicula ut pretium vitae, varius vitae arcu. Phasellus at nibh
          faucibus, vehicula nulla eleifend, tempor ipsum. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam
          sed lorem lacus. Nam lacinia egestas dui semper scelerisque. Nam dolor
          velit, sollicitudin non dolor eget, fringilla ullamcorper turpis.
          Morbi aliquam ex nec faucibus hendrerit. Nullam sit amet efficitur
          leo. Sed molestie ante nec tincidunt suscipit. Vivamus ornare, mi et
          ultrices elementum, elit lacus aliquam magna, in luctus nulla ex quis
          nulla. Nullam nec lacus eu nisl commodo hendrerit. Phasellus eget
          dapibus libero. Vivamus interdum ligula lorem, non aliquam sapien
          consectetur porta. Maecenas eu varius diam, eu cursus ipsum. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec volutpat erat eu augue pellentesque, at auctor
          lectus interdum. In hac habitasse platea dictumst. Nullam sed magna
          sed nisl faucibus venenatis. Nam et venenatis risus. Maecenas sit amet
          fermentum dolor. Cras ultrices cursus lacus, vel sagittis purus.
          Mauris rhoncus nisl vitae eros varius ornare. Cras sit amet nunc nec
          odio sollicitudin accumsan congue sed dolor. Cras at tellus in erat
          ornare aliquam nec egestas nisi. Nam interdum condimentum nunc, nec
          sollicitudin arcu facilisis et. Sed eleifend eleifend varius. Duis
          auctor ipsum in arcu sodales accumsan. Donec bibendum hendrerit
          iaculis. Cras sollicitudin, dolor non feugiat tincidunt, augue odio
          posuere felis, eu hendrerit magna quam id leo. Proin tellus ligula,
          cursus quis ipsum non, lobortis cursus urna. Donec mollis sollicitudin
          arcu, vitae pharetra metus molestie in. Maecenas quis eleifend enim.
          In sed fermentum libero. Sed velit odio, laoreet non varius eu,
          malesuada non sapien. Quisque molestie urna tempor turpis aliquam
          sollicitudin. In vel velit malesuada, laoreet diam eu, cursus elit.
          Praesent ut velit ante. Curabitur eleifend orci sed risus fringilla,
          vel fermentum purus finibus. Fusce porttitor, enim ut congue molestie,
          dui diam commodo libero, vel dictum velit dui ut purus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Sed tincidunt leo eget nisl ornare, eu volutpat lacus
          auctor. Duis porttitor, justo eu pharetra efficitur, mi orci interdum
          leo, et placerat lacus purus eget purus. Curabitur vitae molestie
          nisl, ac vulputate dui. Proin non nisi ultricies, mollis lectus ac,
          scelerisque dui.
        </p>
      </div>
    );
}

export default ModalPage;