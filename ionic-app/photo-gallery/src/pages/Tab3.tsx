/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab3.css";
import { useEffect, useState } from "react";

const Tab3: React.FC = () => {
  const [dataset, setDataset] = useState<any[]>([]);

  const dataURL =
    "https://dev-srjc-fall-2025-cs-55-13.pantheonsite.io/wp-json/wp/v2/product_order";

  useEffect(() => {
    fetch(dataURL)
      .then((response) => response.json())
      .then((data) => setDataset(data));
  }, []);
  console.log(dataset);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Orders</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Orders</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList id="thing-list">
          <IonListHeader>Orders ({dataset.length})</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>Order #: {item.acf.order_number}</h4>
                <p>Item: {item.acf.item_name}</p>
                <p>
                  Total: $
                  {(
                    parseFloat((item.acf.price || "0").replace("$", "")) *
                    1.0825
                  ).toFixed(2)}
                </p>
                <p>count: {item.acf.count}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
