import Image from "next/image";
import Airbnb from '../../public/airbnb.svg';

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']

  let a = [20, 30, 40]


  return (
      <div>
        <h4>상품목록</h4>
        {
          상품.map((i, idx) => {
            return (
              <div key={i}>
                <Image src={Airbnb} />
                <h4>{a} $40</h4>
              </div>
            )
          })
        }
      </div>
    );
  }
  