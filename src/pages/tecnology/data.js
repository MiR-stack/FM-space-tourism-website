import vehicle_portrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import vehicle_landscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceport_portrait from "../../assets/technology/image-spaceport-portrait.jpg";
import spaceport_landscape from "../../assets/technology/image-spaceport-landscape.jpg";
import capsule_portrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import capsule_landscape from "../../assets/technology/image-space-capsule-landscape.jpg";

const data = [
  {
    id: 1,
    image: {
      portrait: vehicle_portrait,
      landscape: vehicle_landscape,
    },
    title: "launch vehicle",
    shortDes:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 2,
    image: {
      portrait: spaceport_portrait,
      landscape: spaceport_landscape,
    },
    title: "spaceport",
    shortDes:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: 3,
    image: {
      portrait: capsule_portrait,
      landscape: capsule_landscape,
    },
    title: "space capsule",
    shortDes:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export default data;
