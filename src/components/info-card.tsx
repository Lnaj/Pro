import { Card, CardHeader, CardBody, Typography, IconButton } from "@material-tailwind/react";

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  date: string;
  children: React.ReactNode;
}

export function InfoCard({ icon: Icon, title, date, children }: InfoCardProps) {
  return (
    <Card className="shadow-lg" {...({} as any)}>
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible pb-0"
        floated={false}
        {...({} as any)}
      >
        <div className="flex flex-col gap-1">
          <Typography variant="small" className="text-blue-gray-500" {...({} as any)}>
            {date}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="font-semibold" {...({} as any)}>
            {title}
          </Typography>
        </div>
        <IconButton className="flex-shrink-0" {...({} as any)}>
          <Icon className="h-6 w-6 text-blue-gray-500" />
        </IconButton>
      </CardHeader>
      <CardBody className="pt-4" {...({} as any)}>
        <Typography className="text-blue-gray-500" {...({} as any)}>
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
