/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [dataset, setDataset] = useState<any[]>([]);

  const dataURL =
    "https://dev-srjc-fall-2025-cs-55-13.pantheonsite.io/wp-json/wp/v2/product";

  useEffect(() => {
    fetch(dataURL)
      .then((response) => response.json())
      .then((data) => setDataset(data));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList id="thing-list">
          <IonListHeader>Product List</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>{item.acf.product_name}</h4>
                <p>{item.acf.description}</p>
                <p>SKU: {item.acf.sku}</p>
                <p>Price: {item.acf.price}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
