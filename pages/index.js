import Head from "next/head";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Cillum nisi fatback aute sirloin, adipisicing nostrud meatloaf shankle
        cupim veniam t-bone. Drumstick culpa in commodo, corned beef capicola
        kevin venison chuck burgdoggen mollit deserunt cow. Ea rump do pork loin
        anim pork drumstick ribeye ad non frankfurter quis tongue eiusmod
        consectetur.
      </p>
      <p>
        Cillum nisi fatback aute sirloin, adipisicing nostrud meatloaf shankle
        cupim veniam t-bone. Drumstick culpa in commodo, corned beef capicola
        kevin venison chuck burgdoggen mollit deserunt cow. Ea rump do pork loin
        anim pork drumstick ribeye ad non frankfurter quis tongue eiusmod
        consectetur.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
