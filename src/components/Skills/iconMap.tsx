import {
  ReactIcon, VueIcon, TypeScriptIcon, TailwindIcon
} from '../icons/FrameworkIcons';
import {
  NodeIcon, PythonIcon
} from '../icons/BackendIcons';
import {
  PostgresIcon, MongoIcon
} from '../icons/DatabaseIcons';
import {
  DockerIcon, KubernetesIcon, AwsIcon, GitIcon
} from '../icons/DevOpsIcons';
import {
  ApiIcon, GraphQLIcon, SecurityIcon
} from '../icons/OtherIcons';

export const iconMap = {
  React: ReactIcon,
  'Vue.js': VueIcon,
  TypeScript: TypeScriptIcon,
  'Tailwind CSS': TailwindIcon,
  'Node.js': NodeIcon,
  Python: PythonIcon,
  PostgreSQL: PostgresIcon,
  MongoDB: MongoIcon,
  Docker: DockerIcon,
  AWS: AwsIcon,
  Kubernetes: KubernetesIcon,
  Git: GitIcon,
  'REST API': ApiIcon,
  GraphQL: GraphQLIcon,
  Security: SecurityIcon,
} as const;

export type IconName = keyof typeof iconMap;