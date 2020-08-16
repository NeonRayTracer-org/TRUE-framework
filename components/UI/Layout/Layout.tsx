/** @format */

import { Container, Grid } from '@material-ui/core'
import { AppBar } from './AppBar'
import { AppDrawer, DrawerMenu } from './Drawer'
import layoutStyles from './Layout.styles'

interface ILayoutProps {
  routes: Array<{ route: string; as: string }>
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children, routes } = props

  const classes = layoutStyles()

  return (
    <div className={classes.root}>
      <AppBar
        appBarClassName={classes.appBar}
        iconButtonClassName={classes.menuButton}
      />
      <nav>
        <AppDrawer drawerPaperClassName={classes.drawerPaper}>
          <DrawerMenu routes={routes} />
        </AppDrawer>
      </nav>

      <Container className={classes.content} component="main">
        <div className={classes.toolbar} />
        {/* Wrap page components in a 'Root Grid' (https://material-ui.com/components/grid/) */}
        <Grid container>
          <>{children}</>
        </Grid>
      </Container>
    </div>
  )
}

export default Layout
