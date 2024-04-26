import { FC, ReactElement } from 'react';
import SidebarLeft from 'src/features/components/sidebar/SidebarLeft';
import SidebarRight from 'src/features/components/sidebar/SidebarRight';
import Stories from 'src/features/components/stories/Stories';
import CreatePost from '../post/CreatePost';
import SuggetionsHome from './components/HomeSuggetions';
import HomeSuggetionCommunity from './components/HomeSuggetionCommunity';

const Home: FC = (): ReactElement => {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow flex">
      <div className="w-1/5">
        <SidebarLeft />
      </div>
      <div className="w-3/5">
        <Stories />
        <CreatePost />
        <SuggetionsHome gigs={[]} title={''} />
        <HomeSuggetionCommunity />
      </div>
      <div className="w-1/5">
          <SidebarRight />
      </div>
    </div>
  </div>
  );
};

export default Home;
