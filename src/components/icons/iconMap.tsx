import {
  ReactIcon, VueIcon, TypeScriptIcon, AngularIcon, FlutterIcon,
  ReactNativeIcon, NodeIcon, JavaScriptIcon
} from './FrameworkIcons';
import {
  PythonIcon, JavaIcon, DartIcon, PhpIcon, CSharpIcon,
  HaskellIcon, CIcon
} from './LanguageIcons';
import {
  FastAPIIcon, SpringIcon, LaravelIcon, FlaskIcon, SymfonyIcon
} from './BackendIcons';
import {
  PostgresIcon, MongoIcon, MySQLIcon
} from './DatabaseIcons';
import {
  DockerIcon, KubernetesIcon, AwsIcon, GitIcon, GitLabIcon,
  AnsibleIcon, FirebaseIcon
} from './DevOpsIcons';
import {
  RestIcon, GraphQLIcon, IoTIcon, MicroservicesIcon,
  ShellIcon, FigmaIcon, WordPressIcon
} from './OtherIcons';

export const iconMap = {
  // Languages
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  Python: PythonIcon,
  Java: JavaIcon,
  Dart: DartIcon,
  PHP: PhpIcon,
  C: CIcon,
  CSharp: CSharpIcon,
  Haskell: HaskellIcon,

  // Frontend
  React: ReactIcon,
  'Vue.js': VueIcon,
  Angular: AngularIcon,
  Flutter: FlutterIcon,
  ReactNative: ReactNativeIcon,

  // Backend
  'Node.js': NodeIcon,
  FastAPI: FastAPIIcon,
  Spring: SpringIcon,
  Laravel: LaravelIcon,
  Flask: FlaskIcon,
  Symfony: SymfonyIcon,

  // DevOps
  Docker: DockerIcon,
  GitLab: GitLabIcon,
  AWS: AwsIcon,
  Kubernetes: KubernetesIcon,
  Ansible: AnsibleIcon,
  Firebase: FirebaseIcon,

  // Databases
  PostgreSQL: PostgresIcon,
  MongoDB: MongoIcon,
  MySQL: MySQLIcon,

  // API & Architecture
  REST: RestIcon,
  GraphQL: GraphQLIcon,
  Microservices: MicroservicesIcon,
  IoT: IoTIcon,

  // Tools & Others
  Git: GitIcon,
  Shell: ShellIcon,
  Figma: FigmaIcon,
  WordPress: WordPressIcon,
} as const;

export type IconName = keyof typeof iconMap;