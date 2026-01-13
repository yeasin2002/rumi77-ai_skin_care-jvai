import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const MostlyOrderedArea = () => {
  return (
    <Card className="border-0">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-xl font-medium">Mostly Ordered Area</CardTitle>
        {/* <button type="button" className="text-muted-foreground text-sm hover:underline">
          See more
        </button> */}
      </CardHeader>

      <CardContent className="">
        <div className="h-[300px] w-full overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.95338886736!2d90.33728812452516!3d23.78097571498498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1704067200000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mostly Ordered Area Map"
          />
        </div>
      </CardContent>
    </Card>
  )
}
