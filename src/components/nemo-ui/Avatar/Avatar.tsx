import {
  Fallback as RadixAvatarFallback,
  Image as RadixAvatarIamge,
  Root as RadixAvatar,
} from '@radix-ui/react-avatar';
import clsx from 'clsx';
import styles from './avatar.module.css';

interface AvatarProps {
  fullName: string;
}
export const Avatar = ({ fullName }: AvatarProps) => {
  return (
    <RadixAvatar className={clsx(styles.wrapper)}>
      <RadixAvatarIamge
        className={clsx(styles.avatar_image)}
        src={`https://api.dicebear.com/5.x/initials/svg?scale=60&seed=${fullName}`}
        alt={fullName}
      />
      <RadixAvatarFallback
        className={clsx(styles.avatar_fallback)}
        delayMs={600}>
        CT
      </RadixAvatarFallback>
    </RadixAvatar>
  );
};
