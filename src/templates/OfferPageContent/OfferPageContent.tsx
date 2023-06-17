/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Card, Grid } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { BidDTO } from '../../common/types/Bid.types';
import { AuthenticationContext } from '../../components/AuthenticationContext/AuthenticationContext';
import { Category } from '../HomePageContent/HomePageContent.types';
import { OfferBidCreationForm } from '../OfferBidCreationForm/OfferBidCreationForm';
import { OfferBidList } from '../OfferBidList/OfferBidList';
import { OfferBidListProps } from '../OfferBidList/OfferBidList.types';
import { OfferControlForm } from '../OfferControlForm/OfferControlForm';
import { OfferHeader } from '../OfferHeader/OfferHeader';
import { OfferHeaderProps } from '../OfferHeader/OfferHeader.types';
import { OfferInfo } from '../OfferInfo/OfferInfo';
import { OfferInfoProps } from '../OfferInfo/OfferInfo.types';
import { UserContentProps } from '../UserContent/UserContent.types';

type OfferDTO = {
  id: number;
  title: string;
  ended: boolean;
  expirationDate: Date;
  creationDate: Date;
  description: string;
  photos: string[];
  bids: BidDTO[];
  tags: Category[];
  advertiserId: number;
  winnerId: number;
};

export function OfferPageContent() {
  //Get offer status, offer title, offer description, get category
  //Also get seller name and surname, his id(needs to link to his profile), all ratings of the seller, seller status(verified, not verified))
  //Also get all bidders, their names, surnames, ratings, pictures, status(verified, not verified), their bids

  const [offerId, setOfferId] = useState<number>(0);
  const [offerStatus, setOfferStatus] = useState<string>('');
  const [offerTitle, setOfferTitle] = useState<string>('');
  const [offerDescription, setOfferDescription] = useState<string>('');
  const [offerOwnerName, setOfferOwnerName] = useState<string>('');
  const [offerOwnerSurname, setOfferOwnerSurname] = useState<string>('');
  const [offerOwnerId, setOfferOwnerId] = useState<number>(0);
  const [offerOwnerRating, setOfferOwnerRating] = useState<number>(0);
  const [offerOwnerStatus, setOfferOwnerStatus] = useState<string>('');
  const [offerImageUrls, setOfferImageUrls] = useState<string[]>([]);
  const [offerCategories, setOfferCategories] = useState<Category[]>([]);
  const [offerBids, setOfferBids] = useState<BidDTO[]>([]);

  const userContext = useContext(AuthenticationContext);

  if (!userContext) {
    throw new Error('AuthenticationContext is null');
  }

  const { id } = userContext;
  const userId = id ? id : -1;
  console.log(`id${userId}`);
  console.log(`offer${offerOwnerId}`);
  const isOwner = id === offerOwnerId;

  useEffect(() => {
    //our url is /offer/:id
    //get id from url
    const pathname = window.location.pathname;
    const rightPartIndex = 1;
    const urlId = Number(pathname.split('/offer/')[rightPartIndex]); // Extract the ID from the URL
    if (isNaN(urlId)) {
      throw new Error('Invalid ID');
    }
    //url will be used later on when we have the backend
    fetch('../src/templates/OfferPageContent/testOfferPageContent.json')
      .then((response) => {
        return response.json();
      })
      .then((data: OfferDTO) => {
        setOfferOwnerId(data.advertiserId);
        setOfferStatus(data.ended ? 'Closed' : 'Open');
        setOfferTitle(data.title);
        setOfferDescription(data.description);
        setOfferImageUrls(data.photos);
        setOfferCategories(data.tags);
        setOfferBids(data.bids);
        setOfferId(data.id);
        fetch('../src/templates/OfferPageContent/testUsers.json')
          .then((response) => {
            return response.json();
          })
          .then((userData: UserContentProps[]) => {
            const neededUser = userData.find((element) => {
              return element.id === data.advertiserId;
            });
            if (!neededUser) {
              throw new Error('User not found');
            }
            setOfferOwnerName(neededUser.name);
            setOfferOwnerSurname(neededUser.surname);
            setOfferOwnerId(neededUser.id);
            console.log(neededUser.stars);
            console.log(Number(neededUser.stars));
            setOfferOwnerRating(Number(neededUser.stars));
            setOfferOwnerStatus(neededUser.verified ? 'Verified' : 'Not verified');
            //If user is logged in, check if he is the owner of the offer
            if (id === neededUser.id) {
              //If he is, he can't bid, and he can accept the bid
            }
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((error) => {
        throw error;
      });
  }, [id]);

  const homePageSxObj = {
    backgroundColor: '#E8F6F6',
  };

  const offerHeaderProps: OfferHeaderProps = {
    bidHighestPrice:
      offerBids.length > 0
        ? Math.max(
            ...offerBids.map((element) => {
              return element.price;
            })
          )
        : 0,
    bidLowestPrice:
      offerBids.length > 0
        ? Math.min(
            ...offerBids.map((element) => {
              return element.price;
            })
          )
        : 0,
    offerTitle: offerTitle,
    offerStatus: offerStatus,
  };

  const offerInfoProps: OfferInfoProps = {
    offerDescription,
    offerOwnerName,
    offerOwnerSurname,
    offerOwnerRating,
    offerOwnerStatus,
    offerCategories,
    offerImageUrls,
  };

  const offerBidListProps: OfferBidListProps = {
    bidList: offerBids,
    isOwner: isOwner,
    listingId: offerId,
  };
  return (
    <Grid
      container
      height={'auto'}
      sx={homePageSxObj}
      justifyContent={'flex-start'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Card
        sx={{
          width: '75%',
          height: '100%',
          minHeight: '500px',
          bgcolor: '#F5FBFB',
          padding: 3,
          flexDirection: 'column',
          flexWrap: 'nowrap',
          spacing: 2,
          marginTop: 4,
          marginBottom: 10,
        }}
      >
        <OfferHeader {...offerHeaderProps}></OfferHeader>
        <OfferInfo {...offerInfoProps}></OfferInfo>
        <OfferBidList {...offerBidListProps}></OfferBidList>
        {isOwner ? <OfferControlForm></OfferControlForm> : <OfferBidCreationForm></OfferBidCreationForm>}
      </Card>
    </Grid>
  );
}
