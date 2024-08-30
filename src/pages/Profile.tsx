// Profile.tsx
import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import {
  chevronForward,
  settingsOutline,
  helpCircleOutline,
  homeOutline,
  libraryOutline,
  logOutOutline,
  newspaperOutline,
  personCircleOutline,
  searchCircleOutline,
} from 'ionicons/icons';

import './Profile.css';

function Profile() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            {/* Home Feed */}
            <IonItem routerLink="/feed">
              <IonLabel>Home Feed</IonLabel>
              
              <IonIcon icon={homeOutline} slot="start" />
            </IonItem>
            {/* Author Dashboard */}
            <IonItem routerLink="/authordashboard">
              <IonLabel>Author Dashboard</IonLabel>
              
              <IonIcon icon={newspaperOutline} slot="start" />
            </IonItem>

            {/* Discover */}
            <IonItem routerLink="/discover">
              <IonLabel>Discover Books</IonLabel>
              
              <IonIcon icon={searchCircleOutline} slot="start" />
              </IonItem>

              {/* Library */}
            <IonItem routerLink="/library">
              <IonLabel>My Library</IonLabel>
              
              <IonIcon icon={libraryOutline} slot="start" />
            </IonItem>

             {/* FAQ Page */}
             <IonItem routerLink="/helpPage">
              <IonLabel>Help and Support</IonLabel>
              
              <IonIcon icon={helpCircleOutline} slot="start" />
            </IonItem>

            {/* Profile Page */}
            <IonItem routerLink="/profile">
              <IonLabel>My Profile</IonLabel>
              
              <IonIcon icon={personCircleOutline} slot="start" />
            </IonItem>

            {/* Setting Page */}
            <IonItem routerLink="/settings">
              <IonLabel>Settings</IonLabel>
              
              <IonIcon icon={settingsOutline} slot="start" />
            </IonItem>

            {/* Logout */}
            {/* Logout */}
            <IonItem routerLink="/home" routerDirection="root">
              <IonLabel>Logout</IonLabel>
              <IonIcon icon={logOutOutline} slot="start" />
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className="custom-title">My Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonItem>
              <IonLabel>Edit Profile Info</IonLabel>
              <IonIcon icon={chevronForward} slot="end" />
            </IonItem>
            <IonItem routerLink="/settings">
              <IonLabel>Settings</IonLabel>
              <IonIcon icon={settingsOutline} slot="start" />
              <IonIcon icon={chevronForward} slot="end" />
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
}

export default Profile;


