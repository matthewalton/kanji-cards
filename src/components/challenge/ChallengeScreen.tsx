import ChallengeScreenActive from "./screens/ChallengeScreenActive";
import ChallengeScreenStart from "./screens/ChallengeScreenStart";

type Props = {
  isActive: boolean;
};

export default function ChallengeScreen({ isActive }: Props) {
  return <>{isActive ? <ChallengeScreenActive /> : <ChallengeScreenStart />}</>;
}
