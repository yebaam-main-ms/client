import Skeleton from 'react-loading-skeleton';
import React from 'react';

const PostFormSkeleton: React.FC = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg" data-testid="post-form-skeleton">
      <div className="py-2">
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">
            <Skeleton baseColor="#EFF1F6" width={70} />
          </h4>
        </div>
        <div className="flex items-center mb-4">
          <Skeleton baseColor="#EFF1F6" circle height="10" containerClassName="w-10 h-10 rounded-full mr-4" />
          <Skeleton baseColor="#EFF1F6" style={{ width: '25vw', height: '20px' }} className="flex-1" />
        </div>
        <ul className="flex flex-col space-y-2">
          <li><Skeleton baseColor="#EFF1F6" style={{ width: '80px', height: '40px' }} /></li>
          <li><Skeleton baseColor="#EFF1F6" style={{ width: '80px', height: '40px' }} /></li>
          <li><Skeleton baseColor="#EFF1F6" style={{ width: '80px', height: '40px' }} /></li>
        </ul>
      </div>
    </div>
  );
};

export default PostFormSkeleton;
