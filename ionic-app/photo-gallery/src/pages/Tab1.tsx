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
    "https://dev-srjc-fall-2025-cs-55-13.pantheonsite.io/wp-json/wp/v2/product?acf_format=standard";

  useEffect(() => {
    fetch(dataURL)
      .then((response) => response.json())
      .then(async (products) => {
        const productsWithImages = await Promise.all(
          products.map(async (product: any) => {
            if (product.acf.image) {
              return { ...product, image: product.acf.image };
            }
            return product;
          })
        );
        setDataset(productsWithImages);
      });
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
          <IonListHeader>Products ({dataset.length})</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.acf.product_name}
                    className="product-img"
                  />
                )}
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
